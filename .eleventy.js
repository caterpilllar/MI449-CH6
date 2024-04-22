// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");



  eleventyConfig.addShortcode("user", function(name, twitterUsername){
    return `<div class="user"> <div class="user_name"> ${name}</div> <div class="user_twitter"> @${twitterUsername} </div> </div>`
  });

  eleventyConfig.addShortcode("nav", function(input){
    return `
    <div class='mx-5'>
      <a class='btn btn-outline-secondary col-2'>Popular</a>
      <a class='btn btn-secondary col'>Discover</a>
      <a>Animation</a>
      <a>Branding</a>
      <a>Illustration</a>
      <a>Mobile</a>
      <a>Print</a>
      <a class='btn btn-outline-secondary col-2'>Filters</a>
    </div>
    `
  });


  eleventyConfig.addShortcode("post", function(image, logo, name, group, likes, views){
    return`
    <section class="container m-5">
    <img src="${image}" class='rounded' style='width:100%'>

      <section class='row'>
       <section class='col-2'>
          <img class='w-75' src="${logo}"; >
         </section>

        <section class='col-2'>
          <h1 class='w-75'>${name}</h1>
        </section>

        <section class='col-2' '>
          <img class='w-75' src="${group}">
        </section>

        <section class='col-2'>
          <img class='w-75' src="images/heart.png">
        </section>

        <section class='col-1'>
          <p class='w-75'>${likes}</p>
        </section>

        <section class='col-2'>
          <img class='w-75' src="images/eye.png">
        </section>

        <section class='col-1'>
          <p class='w-75'>${views}</p>
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


