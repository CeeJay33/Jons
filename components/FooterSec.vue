<template>
    <footer id="footer" class="section-p1">
        <div class="col">
            <!-- <img class="loho" src="./others/hmm-removebg-preview.png" width="150"> -->
            <h4>Contacts</h4>
            <p><strong>Address:</strong> 100 Mende road, Street 3, Maryland</p>
            <p><strong>Phone:</strong> +234 8022619320</p>
            <p><strong>Hours:</strong> 9:00 - 10:00, mon - sat</p>
            <div class="follow">
                <h4>Follow us</h4>
                <div class="icon">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-pintrest-p"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
        </div>

        <div class="col">
            <h4>About</h4>
            <a>About Us </a>
            <a href="#">Delivery information</a>
            <a href="#">Privacy</a>
            <a href="#">Terms & Condition</a>
            <a >Contact Us </a>
        </div>
        <div class="col">
            <h4>My Account</h4>
            <a >Sign In </a>
            <a href="#">View cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
        </div>

        <div class="col install">
            <h4>install App</h4>
            <p>From App Store or Google Play</p>
            <div class="row">
                <!-- <img src="./others/pay/images.png" width="100" alt=""> -->
            </div>
            <!-- <img src="./others/pay/paystack.png" width="300" alt=""> -->
        </div>
        <div class="copyright">
            <p>&#169; 2021,Powered By Joshkaytech - Online Kay_Jay_Boutique</p>
        </div>
    </footer> 
</template>


<style scoped lang="css">

#footer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 4rem;
    padding: 5rem 3rem;
    background-color: #1f2122;
}

#footer .col{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: "Instrument Sans", sans-serif;
    margin-bottom: 20px;
    color: #fff;
}

#footer .loho{
    margin-bottom: 30px;
}

#footer h4{
    font-size: 18px;
    padding-bottom: 20px;
    font-family: "Instrument Sans", sans-serif;
    color: #fff;
}

#footer p{
    font-size: 13px;
    color: #ffffff;
    font-family: "Instrument Sans", sans-serif;
    margin: 0 0 8px 0;
}

#footer a{
    font-size: 13px;
    text-decoration: none;
    color: #fff;
    font-family: "Instrument Sans", sans-serif;
    margin: 0 0 8px 0;
    margin-bottom: 10px;
}

#footer .follow{
    margin-top: 20px;
}

#footer .follow i{
    color: #fff;
    padding-right: 4px;
    font-family: "Instrument Sans", sans-serif;
    cursor: pointer;    
}

#footer .install .row img{
    border-radius: 6px;
}

#footer .install img{
    margin: 10px 0 15px 0;
}

#footer .follow i:hover,
#footer a:hover{
    color: #088178;

}


footer .copyright{
    width: 100%;
    text-align: center;
}


@media (max-width:499px){
    #footer{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 1rem 1.5rem;
    }
}
</style>