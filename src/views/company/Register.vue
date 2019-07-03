<template>
  <!-- Material form register -->
  <form>
    <p class="h4 text-center mb-4">Register</p>
    <div class="row">
    <div class="col-md-6">
    <div class="grey-text">
      <mdb-input label="Conpany Name" icon="user" type="text"/>
      <mdb-input label="Company Email" icon="envelope" type="email"/>
      <mdb-input label="Address" icon="address" type="text"/>
      <mdb-input icon="address" type="text"/>
      <mdb-input label="Phone" icon="phone" type="text"/>
      <mdb-input label="Tel" icon="phone" type="text"/>
      <Datepicker class="md-form"/>
      
    </div>
    </div>
    <div class="col-md-6">
    <div class="grey-text">
      <mdb-input label="Your name" icon="user" type="text"/>
      <mdb-input label="Your email" icon="envelope" type="email"/>
      <mdb-input label="Your Phone" icon="phone" type="text"/>
       <!-- <div class="md-form"> -->
         <!-- <Datepicker class="md-form"/> -->
      <!-- </div> -->
      
    </div>
    </div>
     <div class="text-right col-md-12">
 
          <mdb-btn color="primary">Register</mdb-btn>

      
    </div>
    </div>
  </form>
  <!-- Material form register -->
</template>

<script>
  import { mdbInput, mdbBtn } from 'mdbvue';
  import Datepicker from 'vuejs-datepicker';
  export default {
    name: 'Basic',
    components: {
      mdbInput,
      mdbBtn,
      Datepicker
    }
  }
</script>


