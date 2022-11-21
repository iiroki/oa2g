import { APIGatewayEvent, APIGatewayProxyResult, Context } from 'aws-lambda'
import { getGithubAccessTokenFromEvent } from './auth0'
import { AuthorizedEvent } from './model'
import { getRouteHandler } from './routes'
import { buildJsonResponse } from './utils'

export const backendHandler = async (
  e: APIGatewayEvent,
  ctx: Context
): Promise<APIGatewayProxyResult> => {
  ctx.callbackWaitsForEmptyEventLoop = false
  // Check that GitHub token exists as the first thing
  const token = await getGithubAccessTokenFromEvent(e)
  if (!token) {
    return buildJsonResponse(401, { message: 'Invalid GitHub token' })
  }

  let body: object | null = null
  try {
    if (e.body) {
      body = JSON.parse(e.body)
    }
  } catch (e) {
    // Do nothing here
  }

  // Add GitHub token to the event
  const authorizedEvent: AuthorizedEvent = {
    ...e,
    // Add GitHub token to the event
    githubToken: token,
    body
  }

  // Handle the event
  const routeHandler = getRouteHandler(authorizedEvent)
  try {
    return await routeHandler(authorizedEvent)
  } catch (err) {
    return buildJsonResponse(500, { message: `Unexpecter error: ${err}` })
  }
}
