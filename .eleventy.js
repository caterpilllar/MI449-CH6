// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");



  eleventyConfig.addShortcode("user", function(name, twitterUsername){
    return `<div class="user"> <div class="user_name"> ${name}</div> <div class="user_twitter"> @${twitterUsername} </div> </div>`
  });


  eleventyConfig.addShortcode("post", function(image, logo, name, group, likes, views){
    return`
    <section class="container">
    <img src="${image}" class='rounded' style='width:100%'>


      <section class='row'>
       <section class='col-1'>
          <img src="${logo}" style='width:80%; '>
         </section>

        <section class='col-1''>
          <h1>${name}</h1>
        </section>

        <section class='col-1' style='margin:0px;'>
          <img src="${group}">
        </section>

        <section class='col-3'>
          <img src="images/heart.png" style='width:80%;'>
        </section>

        <section class='col-1'>
          <p>${likes}</p>
        </section>

        <section class='col-1'>
          <img src="images/eye.png" style='width:80%'>
        </section>

        <section class='col-1'>
          <p>${views}</p>
        </section>

      </section>
    <section>
    `
  });



  eleventyConfig.addShortcode('test', function(image, title){
    return `
      <div class="card">
        <img src="images/${image}" class='card-img-top'>
          <div class='card-body'>
            <h2 class='card-title'>${title}</h2>
          </div>
        </img>
      </div>
      `
  });

  
  

};


