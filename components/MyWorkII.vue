<template>
    <div class="Main__about__us__Section scroll-mt-40" id="work">
        <div class="about_images_section ">
            <div class="first_image_section">
                <img src="~/assets/images/photo_2024-09-21_16-30-37.jpg" alt="">
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
                <img src="~/assets/images/photo_2024-09-19_11-44-20.jpg" alt="">
            </div>
        </div>


        <div class="about_images_section">
            <div class="first_image_section">
                <img src="~/assets/images/photo_2024-09-21_16-45-23.jpg" alt="">
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
                <img src="~/assets/images/photo_2024-09-21_16-37-52.jpg" alt="">
            </div>
        </div>


    </div>
</template>





<style>

.Main__about__us__Section{
    display: flex;
    align-items: center;
    /* justify-content: center; */
    gap: 2rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
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
/* 
.about__description__section{
    width: 40%;
    padding-left: 3rem;

} */


</style>