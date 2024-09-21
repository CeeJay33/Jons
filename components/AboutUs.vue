<template>
    <div class="Main__about__us__Section scroll-mt-40" id="about">
        <div class="about_images_section">
            <div class="first_image_section">
                <img src="~/assets/images/photo_2024-09-19_18-50-09.jpg" alt="">
            </div>

            <div class="second_image_section">
                <div class="little__content">
                     <div class="class_container_1">
                    <h2>12+</h2>
                    <p>Years of</p>
                    <p>experiecnce</p>
                </div>
                <div class="class_container_2">
                    <h2>500+</h2>
                    <p>Happy</p>
                    <p>customers</p>
                </div>
                </div>
                <img src="~/assets/images/photo_2024-09-19_18-53-48.jpg" alt="">
            </div>
        </div>


        <div class="about__description__section">
            <span>🤝 Your gateway to digital success</span>
            <h1>Explore the world with Packaging</h1>

            <p>Our major aim and commitment is to offer great marketing communication solutions through our services and products that can help the small and large scale businesses to acquire and maintain a global standard products, services and marketing. We are focused on offering valuable products and services that can help both the big, medium and small companies and organizations to air their voices in the global market places in a most acceptable and affordable ways.</p>
       
            <ul class="">
                <li class="flex items-center pt-4"><svg stroke="#7509e1" fill="#7509e1" stroke-width="0" viewBox="0 0 16 16" class="text-primary me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path></svg> first descrption</li>
                <li class="flex items-center pt-4"><svg stroke="#7509e1" fill="#7509e1" stroke-width="0" viewBox="0 0 16 16" class="text-primary me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path></svg> Second descritption</li>
                <li class="flex items-center pt-4"><svg stroke="#7509e1" fill="#7509e1" stroke-width="0" viewBox="0 0 16 16" class="text-primary me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path></svg> thrid description</li>
            </ul>
        </div>


    </div>
</template>





<style>

.Main__about__us__Section{
    display: flex;
    align-items: center;
    /* justify-content: center; */
    margin-top: 5rem;
    margin-bottom: 5rem;
    padding: 0 5rem;
}

.about_images_section{
    display: flex;
    gap: 2rem;
    /* justify-content: center; */
}

.about_images_section .first_image_section img{
    width: 350px;
    border-radius: 4px;
}

.about_images_section .second_image_section img{
    width: 350px;
    border-radius: 4px;
}

.little__content{
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
}

.little__content .class_container_1{
    background-color: #000;
    padding: 10px 5px;
    width: 150px;
    border-radius: 7px;
    height: 130px;
    margin-bottom: 2rem;
}

.little__content .class_container_1 h2{
    color: #fff;
    font-size: 35px;
    font-weight: 700;
    text-align: center;
}

.little__content .class_container_1 p{
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
}

.little__content .class_container_2{
    background-color: #7509e1;
    padding: 10px 5px;
    width: 150px;
    border-radius: 7px;
    height: 130px;
    margin-bottom: 2rem;
}

.little__content .class_container_2 h2{
    color: #fff;
    font-size: 35px;
    font-weight: 700;
    text-align: center;
}

.little__content .class_container_2 p{
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
}




/* scond one */

.about__description__section{
    width: 40%;
    padding-left: 3rem;

}

.about__description__section h1{
      font-family: "Instrument Sans", sans-serif;
    font-size: 2.7rem;
    color: rgb(39, 38, 38);
    font-weight: 600;
}

.about__description__section p{
    font-family: "Instrument Sans", sans-serif;
    font-size: 16px
}
</style>