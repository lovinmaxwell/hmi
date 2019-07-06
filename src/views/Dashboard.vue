<template>

   <div class="animated-fadein"> 
  
   <!-- img-src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/default-album/vuel_870x22041d65dcfde7c407c835366a8ee5d637b.png?sfvrsn=e082f7_1" img-center class="mb-5" -->
  
  <div>
   <b-card
    overlay
    img-src="https://s3.amazonaws.com/coursetro/posts/87-full.png" img-center class="mb-5"
    img aria-setsize="5px" 
    img-alt="Card Image"
    text-variant="white"
    title="Documenting Requirements - User Stories"
    >
         <b-card-text>
      Using Vue.Js & Components
   </b-card-text>

  <vue-particles
      color="#1DE9B6"
    :particleOpacity="0.9"
    :particlesNumber="350"
    shapeType="polygon"
    :particleSize="6"
    linesColor="#1DE9B6"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0.4"
    :linesDistance="100"
    :moveSpeed="6"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="true"
    clickMode="repulse"
>

</vue-particles> 
</b-card>
</div>

  
<div>
  <b-card 
    title="Total User Stories"
    img-src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/a2deda78758501.5cae1b70c15a0.jpg" 
    style=" position: absolute; right: 1035px; max-width: 20rem; max-height: 21rem;"
    img-alt="Image"
    img-top
    tag="article"
    class="mb-2"
  >
    <b-card-text>
      Total User Stories Stored
    </b-card-text>
    <div class="brand-card-body">
            
              <div class="text-value">17786</div>
              <div class="text-uppercase ">Entries</div>
            
          </div>
    <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
  </b-card>
</div>

<!-- img-src="https://thumbs.gfycat.com/PinkPiercingBull-size_restricted.gif"  -->
<!-- img-src="https://udemy-images.udemy.com/course/750x422/1047968_aff4_2.jpg"  -->

<div>
  <b-card
    title="User Stories Entered"
    img-src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/91baf878758501.5cae1b70c1243.jpg" 
    
    img-alt="Image"
    img-top
    tag="article"
    style=" position: absolute; right: 690px; max-width: 20rem; max-height: 21rem;"
    class="mb-2"
  >
    <b-card-text> User Stories Added</b-card-text>
    <div class="brand-card-body">
            
              <div class="text-value">9112</div>
              <div class="text-uppercase ">Entries</div>
              
          </div>
    <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
  </b-card>
</div>

<!-- img-src="http://incurs.us/sites/default/files/2016-07/vuejs-wallpaper-1_0.png"  -->

<div>
  <b-card
    title="Recent User Stories"
    img-src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/8cae3078758501.5cae1b70c1c3e.jpg" 
    img-alt="Image" 
    img-top
    tag="article"
    style=" position: absolute; right: 350px; max-width: 20rem; max-height: 21rem;"
    class="mb-2"
  >
    <b-card-text> User Stories Stored Recently </b-card-text>
    <div class="brand-card-body">
            
              <div class="text-value">3123</div>
              <div class="text-uppercase ">Entries</div>
            
          </div>
    <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
  </b-card>
</div>

<div>
  <b-card
    title="New User Stories"
    img-src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/96413778758501.5cae1b70c0b1c.jpg" 
    img-alt="Image" 
    img-top
    tag="article"
    style=" position: absolute; right: 10px; max-width: 20rem; max-height: 21rem;"
    class="mb-2"
  >
    <b-card-text> User Stories</b-card-text>
    <div class="brand-card-body">
            
              <div class="text-value">03</div>
              <div class="text-uppercase ">Entries</div>
            
          </div>
    <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
  </b-card>
</div>
 
<br/> <br/><br/><br/> <br/><br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/><br/><br/>

<b-row>
         <b-col sm="6" lg="3">
        <div class="brand-card">
          <div class="brand-card-header bg-google-plus">
            <i class="fa fa-google-plus"></i>
            <div class="chart-wrapper">
              <social-box-chart-example chartId="box-chart-04" :data="[35, 23, 56, 22, 97, 23, 64]" />
            </div>
          </div>
          <div class="brand-card-body">
            <div>
              <div class="text-value">894</div>
              <div class="text-uppercase text-muted small">followers</div>
            </div>
            <div>
              <div class="text-value">92</div>
              <div class="text-uppercase text-muted small">circles</div>
            </div>
          </div>
        </div>
      </b-col>
     
      <b-col sm="6" lg="3">
        <div class="brand-card">
          <div class="brand-card-header bg-facebook">
            <i class="fa fa-facebook"></i>
            <div class="chart-wrapper">
              <social-box-chart-example chartId="box-chart-01" :data="[65, 59, 84, 84, 51, 55, 40]" />
            </div>

        </div>
          <div class="brand-card-body">
            <div>
              <div class="text-value">459</div>
              <div class="text-uppercase text-muted small ">feeds</div>
            </div>
             <div>
              <div class="text-value">1.822</div>
              <div class="text-uppercase text-muted small">followers</div>
            </div>
          </div>
        </div>
      </b-col>


      <b-col sm="6" lg="3">
        <div class="brand-card">
          <div class="brand-card-header bg-twitter">
            <i class="fa fa-twitter"></i>
            <div class="chart-wrapper">
              <social-box-chart-example chartId="box-chart-02" :data="[1, 13, 9, 17, 34, 41, 38]" />
            </div>
          </div>
          <div class="brand-card-body">
            <div>
              <div class="text-value">973k</div>
              <div class="text-uppercase text-muted small">followers</div>
            </div>
            <div>
              <div class="text-value">1.792</div>
              <div class="text-uppercase text-muted small">tweets</div>
            </div>
          </div>
          </div>
      </b-col>
      
    

      
      <b-col sm="6" lg="3">
        <div class="brand-card">
          <div class="brand-card-header bg-linkedin">
            <i class="fa fa-linkedin"></i>
            <div class="chart-wrapper">
              <social-box-chart-example chartId="box-chart-03" :data="[78, 81, 80, 45, 34, 12, 40]" />
            </div>
          </div>
          <div class="brand-card-body">
            <div>
              <div class="text-value">500+</div>
              <div class="text-uppercase text-muted small">contacts</div>
            </div>
            <div>
              <div class="text-value">292</div>
              <div class="text-uppercase text-muted small">feeds</div>
            </div>
          </div>
        </div>
      </b-col>
     
     </b-row>
    


  </div>
</template> 

<script>

export default {
  name: 'dashboard'
  
  }
</script>