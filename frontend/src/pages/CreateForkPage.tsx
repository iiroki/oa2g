import NavBar from '../components/NavBar';
import { useCreateFork } from '../hooks/useCreateFork';
import { useState } from 'react';

const CreateForkPage = () => {
    const [forkName, setForkName] = useState<string>('')
    const { isFetching, refetch } = useCreateFork({ name: forkName, templateId: 1 })

    const onForkClicked = async (e: React.FormEvent) => {
        e.preventDefault();
        refetch()
    }

    return (
        <div className='w-screen h-screen bg-repeat bg-surface flex flex-col '>
            <NavBar />
            <form
                onSubmit={onForkClicked}
                className='flex flex-1 flex-col items-center justify-center'>
                <div className='flex items-center'>
                    <svg width="117" height="78" viewBox="0 0 117 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.5268 31.8854C39.5268 32.9555 39.6425 33.8231 39.845 34.4594C40.0763 35.0957 40.3656 35.7898 40.7704 36.5417C40.9151 36.7731 40.9729 37.0044 40.9729 37.2069C40.9729 37.4961 40.7994 37.7853 40.4234 38.0745L38.6014 39.2892C38.3411 39.4627 38.0808 39.5495 37.8494 39.5495C37.5602 39.5495 37.271 39.4049 36.9818 39.1446C36.5769 38.7108 36.2298 38.2481 35.9406 37.7853C35.6514 37.2937 35.3622 36.7442 35.0441 36.079C32.7882 38.7397 29.954 40.0701 26.5413 40.0701C24.1119 40.0701 22.1742 39.376 20.7571 37.9878C19.34 36.5996 18.6169 34.7486 18.6169 32.4349C18.6169 29.9766 19.4846 27.9811 21.2488 26.4772C23.0129 24.9733 25.3555 24.2214 28.3344 24.2214C29.3177 24.2214 30.33 24.3081 31.4 24.4527C32.4701 24.5973 33.5691 24.8287 34.726 25.089V22.9778C34.726 20.7798 34.2632 19.2469 33.3667 18.3504C32.4412 17.4538 30.8795 17.02 28.6525 17.02C27.6403 17.02 26.5991 17.1357 25.5291 17.396C24.459 17.6563 23.4178 17.9744 22.4056 18.3793C21.9429 18.5818 21.5958 18.6974 21.3934 18.7553C21.1909 18.8131 21.0463 18.842 20.9306 18.842C20.5257 18.842 20.3233 18.5528 20.3233 17.9455V16.5284C20.3233 16.0656 20.3811 15.7186 20.5257 15.5161C20.6703 15.3137 20.9306 15.1112 21.3355 14.9088C22.3478 14.3882 23.5624 13.9544 24.9796 13.6073C26.3967 13.2314 27.9006 13.0578 29.4912 13.0578C32.9328 13.0578 35.449 13.8387 37.0686 15.4004C38.6592 16.9622 39.469 19.3337 39.469 22.515V31.8854H39.5268ZM27.7849 36.2814C28.7393 36.2814 29.7226 36.1079 30.7638 35.7608C31.8049 35.4138 32.7304 34.7775 33.5113 33.9099C33.974 33.3604 34.3211 32.7531 34.4946 32.059C34.6681 31.3648 34.7838 30.5261 34.7838 29.5428V28.3281C33.9451 28.1257 33.0485 27.9522 32.1231 27.8365C31.1976 27.7208 30.301 27.663 29.4045 27.663C27.4668 27.663 26.0496 28.0389 25.0953 28.8198C24.1409 29.6007 23.6781 30.6997 23.6781 32.1457C23.6781 33.505 24.0252 34.5172 24.7482 35.2113C25.4423 35.9344 26.4545 36.2814 27.7849 36.2814ZM51.0085 39.4049C50.4879 39.4049 50.1409 39.3181 49.9095 39.1157C49.6781 38.9422 49.4757 38.5373 49.3021 37.9878L42.5057 15.6318C42.3322 15.0534 42.2454 14.6774 42.2454 14.475C42.2454 14.0122 42.4768 13.7519 42.9395 13.7519H45.7738C46.3233 13.7519 46.6993 13.8387 46.9017 14.0412C47.1331 14.2147 47.3066 14.6196 47.4801 15.1691L52.3389 34.3148L56.8505 15.1691C56.9951 14.5907 57.1687 14.2147 57.4 14.0412C57.6314 13.8676 58.0363 13.7519 58.5569 13.7519H60.8706C61.4201 13.7519 61.796 13.8387 62.0274 14.0412C62.2588 14.2147 62.4612 14.6196 62.5769 15.1691L67.1464 34.5462L72.1498 15.1691C72.3233 14.5907 72.5257 14.2147 72.7282 14.0412C72.9595 13.8676 73.3355 13.7519 73.8561 13.7519H76.5457C77.0085 13.7519 77.2688 13.9833 77.2688 14.475C77.2688 14.6196 77.2399 14.7642 77.2109 14.9377C77.182 15.1112 77.1242 15.3426 77.0085 15.6607L70.0385 38.0167C69.865 38.5951 69.6625 38.9711 69.4312 39.1446C69.1998 39.3181 68.8238 39.4338 68.3322 39.4338H65.845C65.2955 39.4338 64.9195 39.3471 64.6881 39.1446C64.4568 38.9422 64.2543 38.5662 64.1386 37.9878L59.6559 19.3337L55.202 37.9588C55.0574 38.5373 54.8839 38.9132 54.6525 39.1157C54.4212 39.3181 54.0163 39.4049 53.4957 39.4049H51.0085ZM88.172 40.1858C86.6681 40.1858 85.1642 40.0122 83.7182 39.6652C82.2721 39.3181 81.1442 38.9422 80.3922 38.5083C79.9295 38.2481 79.6114 37.9588 79.4957 37.6986C79.38 37.4383 79.3222 37.1491 79.3222 36.8888V35.4138C79.3222 34.8065 79.5535 34.5172 79.9874 34.5172C80.1609 34.5172 80.3344 34.5462 80.5079 34.604C80.6815 34.6618 80.9417 34.7775 81.231 34.8932C82.2143 35.327 83.2843 35.6741 84.4123 35.9055C85.5691 36.1368 86.697 36.2525 87.8539 36.2525C89.6759 36.2525 91.093 35.9344 92.0763 35.2981C93.0597 34.6618 93.5802 33.7364 93.5802 32.5506C93.5802 31.7408 93.3199 31.0756 92.7994 30.5261C92.2788 29.9766 91.2955 29.485 89.8783 29.0222L85.6848 27.7208C83.5736 27.0556 82.0118 26.0723 81.0574 24.7709C80.103 23.4983 79.6114 22.0812 79.6114 20.5773C79.6114 19.3626 79.8717 18.2925 80.3922 17.3671C80.9128 16.4416 81.6069 15.6318 82.4746 14.9956C83.3422 14.3304 84.3255 13.8387 85.4823 13.4917C86.6392 13.1446 87.8539 13 89.1264 13C89.7627 13 90.4278 13.0289 91.0641 13.1157C91.7293 13.2024 92.3366 13.3181 92.944 13.4338C93.5224 13.5784 94.0719 13.723 94.5925 13.8966C95.113 14.0701 95.5179 14.2436 95.8072 14.4171C96.212 14.6485 96.5013 14.8799 96.6748 15.1402C96.8483 15.3715 96.9351 15.6897 96.9351 16.0945V17.4538C96.9351 18.0612 96.7037 18.3793 96.2699 18.3793C96.0385 18.3793 95.6625 18.2636 95.1709 18.0323C93.5224 17.2803 91.6714 16.9043 89.6181 16.9043C87.9696 16.9043 86.6681 17.1646 85.7716 17.7141C84.875 18.2636 84.4123 19.1023 84.4123 20.2881C84.4123 21.0979 84.7015 21.792 85.2799 22.3415C85.8583 22.891 86.9284 23.4405 88.4612 23.9321L92.568 25.2336C94.6503 25.8988 96.1542 26.8242 97.0508 28.01C97.9473 29.1958 98.3811 30.5551 98.3811 32.059C98.3811 33.3026 98.1208 34.4305 97.6292 35.4138C97.1086 36.3971 96.4145 37.2647 95.5179 37.9588C94.6214 38.6819 93.5513 39.2024 92.3077 39.5784C91.0063 39.9833 89.647 40.1858 88.172 40.1858Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M93.6381 54.2414C84.1231 61.2692 70.2988 65 58.4123 65C41.7538 65 26.7438 58.8398 15.4067 48.6018C14.5102 47.792 15.32 46.693 16.39 47.3292C28.6525 54.4438 43.7782 58.753 59.4245 58.753C69.9807 58.753 81.578 56.5551 92.2499 52.0434C93.8405 51.3203 95.1998 53.0845 93.6381 54.2414Z" fill="#FF9900" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M97.6002 49.7297C96.3856 48.168 89.5602 48.9777 86.4656 49.3537C85.5402 49.4694 85.3956 48.6596 86.2343 48.0523C91.6714 44.2347 100.608 45.3337 101.649 46.6062C102.69 47.9077 101.36 56.8443 96.2699 61.1246C95.489 61.7898 94.7371 61.4427 95.0841 60.5751C96.2409 57.7119 98.8149 51.2625 97.6002 49.7297Z" fill="#FF9900" />
                    </svg>
                    <p className='text-primary font-bold'>Create a project</p>
                </div>
                <div>
                    <p className='text-white mb-1 font-semibold'>Project name (*)</p>
                    <input
                        className='block w-full bg-primaryContainer text-white focus:border-primary focus:ring-0 placeholder:text-sm'
                        id="project name"
                        type="text"
                        placeholder="Your fork name"
                        onChange={(event) => setForkName(event.target.value)}
                    />
                </div>
                <div className='mt-2'>
                    <button className="bg-primaryContainer hover:bg-primaryContainer/[.60] text-white p-2 hover:text-primary">
                        <div className="flex flex-row space-x-2 justify-center items-center">
                            {isFetching ? (
                                <div role="status">
                                    <svg aria-hidden="true" className="w-6 h-6 text-primaryContainer animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            ) : (
                                <svg className='w-6 h-6' width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 29C17.933 29 19.5 27.433 19.5 25.5C19.5 23.567 17.933 22 16 22C14.067 22 12.5 23.567 12.5 25.5C12.5 27.433 14.067 29 16 29Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 11C10.933 11 12.5 9.433 12.5 7.5C12.5 5.567 10.933 4 9 4C7.067 4 5.5 5.567 5.5 7.5C5.5 9.433 7.067 11 9 11Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M23 11C24.933 11 26.5 9.433 26.5 7.5C26.5 5.567 24.933 4 23 4C21.067 4 19.5 5.567 19.5 7.5C19.5 9.433 21.067 11 23 11Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 18V21M9.5 12C9.5 19 22.5 19 22.5 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}

                            <div className="text-sm font-bold">Create a fork</div>
                        </div>
                    </button>
                </div>
            </form >
        </div >
    );
};

export default CreateForkPage;