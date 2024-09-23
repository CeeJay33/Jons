<template>
    <div class="main-about-us-section scroll-mt-40 flex" id="about">
        <div class="about-description-section">
            <span class="section-highlight">🤝 Your gateway to digital success</span>
            <h1 class="section-title font-bold">Our Vision</h1>

            <p class="section-text">
               Our vision is to grow and emerge as a reputable global Marketing communication Company, that offers a world class and affordable marketing communication solutions to the small, medium and big companies and organizations.
            </p>
            <span class="flex items-center font-semibold">Our Core Values: <span class="italic font-semibold px-3" >  Integrity, Quality, Excellence, Solution</span></span>
            <!-- <ul class="description-list">
                <li class="description-item">
                    <svg stroke="#7509e1" fill="#7509e1" stroke-width="0" viewBox="0 0 16 16" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                    </svg>
                    First description
                </li>
                <li class="description-item">
                    <svg stroke="#7509e1" fill="#7509e1" stroke-width="0" viewBox="0 0 16 16" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                    </svg>
                    Second description
                </li>
                <li class="description-item">
                    <svg stroke="#7509e1" fill="#7509e1" stroke-width="0" viewBox="0 0 16 16" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                    </svg>
                    Third description
                </li>
            </ul> -->
        </div><div class="about-description-section">
            <img src="~/assets/images/photo_2024-09-19_09-51-21.jpg" class="mt-1 rounded-lg" alt="">
        </div>
    </div>
</template>

<style scoped>
.main-about-us-section {
    padding: 40px;
    /* background-color: #f8f9fa; */
}

.about-description-section {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

.section-highlight {
    display: block;
    font-size: 1rem;
    color: #7509e1;
    font-weight: bold;
}

.section-title {
    font-size: 2.5rem;
    color: #333;
    margin-top: 10px;
}

.section-text {
    margin: 20px 0;
    text-align: left;
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
}

.section-textt {
    margin: 20px 0;
    text-align: left;
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
}

.description-list {
    list-style: none;
    padding: 0;
    margin: 20px 0;
}

.description-item {
    display: flex;
    align-items: center;
    padding-top: 20px;
    font-size: 1rem;
    color: #333;
}

.icon {
    margin-right: 10px;
}



@media (max-width: 468px){
    .main-about-us-section {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    /* text-align: left; */
    background-color: #f8f9fa;
}

.section-highlight {
    display: block;
    font-size: 1.5rem;
    color: #7509e1;
    text-align: left;
    font-weight: bold;
}



.section-title{
    font-size: 1.5rem;
    color: #000;
    font-weight: 700;
    margin-top: 20px;
    text-align: left;
}

.section-text {
    margin: 20px 0;
    font-size: 1rem;
    text-align: left;
    line-height: 1.6;
    color: #555;
}
}
</style>
