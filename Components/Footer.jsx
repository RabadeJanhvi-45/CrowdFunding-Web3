import React from "react";

const Footer = () => {
  const productLists=["Market","ERC20 Token","Donation"];
  const contactList=["support@cryptoforge","info@example.com","Contact us"];
  const usefulLink=["Home","About","Company Bio"];

  return(
    <footer class="text-center text-white backgroundMain lg:text-left">
      <div class="mx-6 py-10 text-center md:text-left">
        <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div class="">
            <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Crypto Forage
            </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, qui. Sed quasi, modi iure animi inventore numquam ipsam similique. Suscipit minima id quisquam ad nisi nihil totam fugiat fuga facere!
            </p>

          </div>
          <div class="">
          <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
            Products
            </h6>
            {productLists.map((el,i)=>(
              <p class="mb-4" key={i+1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div class="">
          <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
            Useful Links
            </h6>
            {usefulLink.map((el,i)=>(
              <p class="mb-4" key={i+1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>

       
        <div>
        <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Contact
          </h6>
          {contactList.map((el,i)=>(
              <p class="mb-4" key={i+1}>
                <a href="#!">{el}</a>
              </p>
            ))}
             </div>
        </div>
      </div>
      <div class="backgroundMain p-6 text-center">
        <span>@2024 Copyright:</span>
        <a class="font-semibold" href="">
        Crypto Forage
        </a>
      </div>
    </footer>
  )
};

export default Footer;
