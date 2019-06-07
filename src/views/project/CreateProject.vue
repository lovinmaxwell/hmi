<template>
   <div class="wrapper" >
 
 <!-- <h1  style="text-align:center" > User Stories </h1> -->
  <!-- <b-img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/15fa5b72352761.5be453fb1b1da.jpg"></b-img> -->
   
  <b-img width="300" class="img-circle" alt="Cinque Terre"  src="https://i.pinimg.com/originals/a7/e2/57/a7e2579c60633c543b532c1749716311.gif"></b-img>
  <b-img width="180" style=" position: absolute; right: 610px;" height="350"  src="https://toggl.com/toggl-desktop/images/toggl-man-f7a86f4d8178c67f2cd53ef408f9460e.png"></b-img>
  <b-img width="300" class="img-circle" alt="Cinque Terre" style=" position: absolute; right: 80px;" src="https://i.pinimg.com/originals/10/74/4c/10744cec98ad9c67120f8d6134d59b92.gif"></b-img>
   
  <!-- <b-img width="550" height="300" class="rounded float-center" src="http://img.zcool.cn/community/014aa05af1b7eca801207ab4267f65.gif" ></b-img> -->
  <!-- <img src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png" class="animated bounce infinite" alt="Transparent MDB Logo"> -->
  <!-- <b-img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/559a6372352761.5be59680ee903.gif"></b-img> -->
  <!-- <b-img src="http://img.zcool.cn/community/01ac485af1bc59a801207ab43309c0.gif"></b-img> -->
  <!-- <b-img src="https://toggl.com/toggl-desktop/images/toggl-man-f7a86f4d8178c67f2cd53ef408f9460e.png" fluid alt="Responsive image"></b-img> -->
       
<br/>
<br/>
<br/>

<h2>
<b-form-group id="fieldset-horizontal"  label-size="lg" 
label="Model User Story : As a 'customer' I want to 'see how many products sold' so that 'I can update my stock details'" label-for="input-lg">
</b-form-group>

 <b-form-group id="fieldset-horizontal" label-cols="1" label-cols-lg="1" label-size="lg" 
 label="Enter the requirements below:" label-for="input-lg">
 <!-- <b-form-input id="input-lg" size="lg"></b-form-input> -->
  </b-form-group>
   </h2>


  <div class="row">
<div class=" col-sm-4  card-body" >
 <b-card bg-variant="danger">
    <b-form-group
      label-cols-lg="3"
      label="User Stories"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    > 
      <b-form-group
      
      label-cols-sm="3"
        label="As a < >"
        label-align-sm="right"
        label-for="nested-street"
        placeholder="Small textarea"
      >
        <b-form-input id="nested-street"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="I want to < >"
        label-align-sm="right"
        label-for="nested-city"
      >
        <b-form-input id="nested-city"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="So that < >"
        label-align-sm="right"
        label-for="nested-state"
      >
        <b-form-input id="nested-state"></b-form-input>
      </b-form-group>

       <b-form-group
        label-cols-sm="3"
        label="Status"
        label-align-sm="right" class="mb-0"
      >
        <b-form-radio-group
          class="pt-2" :options="['Done']"
        ></b-form-radio-group>
      </b-form-group>
    </b-form-group>
  </b-card>
</div>




<div class=" col-sm-4  card-body">
<b-card bg-variant="success" >
    <b-form-group
      label-cols-lg="3"
      label="User Stories"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
      label-cols-sm="3"
        label="As a < >"
        label-align-sm="right"
        label-for="nested-street"
        placeholder="Small textarea"
      >
        <b-form-input id="nested-street"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="I want to < >"
        label-align-sm="right"
        label-for="nested-city"
      >
        <b-form-input id="nested-city"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="So that < >"
        label-align-sm="right"
        label-for="nested-state"
      >
        <b-form-input id="nested-state"></b-form-input>
      </b-form-group>

       <b-form-group
        label-cols-sm="3"
        label="Status"
        label-align-sm="right" class="mb-0"
      >
        <b-form-radio-group
          class="pt-2" :options="['Done']"
        ></b-form-radio-group>
      </b-form-group>
    </b-form-group>
  </b-card>
</div>




<div class=" col-sm-4  card-body">
<b-card bg-variant="dark" >
    <b-form-group
      label-cols-lg="3"
      label="User Stories"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
      label-cols-sm="3"
        label="As a < >"
        label-align-sm="right"
        label-for="nested-street"
        placeholder="Small textarea"
      >
        <b-form-input id="nested-street"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="I want to < >"
        label-align-sm="right"
        label-for="nested-city"
      >
        <b-form-input id="nested-city"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="So that < >"
        label-align-sm="right"
        label-for="nested-state"
      >
        <b-form-input id="nested-state"></b-form-input>
      </b-form-group>

       <b-form-group
        label-cols-sm="3"
        label="Status"
        label-align-sm="right" class="mb-0"
      >
        <b-form-radio-group
          class="pt-2" :options="['Done']"
        ></b-form-radio-group>
      </b-form-group>
    </b-form-group>
  </b-card>
</div>
  </div>


<b-row>
    <form method="get" action="/page2">
      <b-button  type="submit" variant="success">Next </b-button>
       </form>
  </b-row> 

    </div>
</template>

<script>
export default {
  name: 'Create Requirements',
}
</script>

<style>
  h1
  {
    color: rgb(243, 35, 35);
    font-family:'Times New Roman', Times, serif;
    font-style:inherit
    
  }
   h2
  {
    color: black
  }

</style>