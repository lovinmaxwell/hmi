<template>
  <div class="row">
    <div class="col-4">
      <h3>Project 1</h3>
      <draggable tag="ul" :list="list" class="list-group" handle=".handle">
        <li class="list-group-item" v-for="(element, idx) in list" :key="element.name">
          <i class="fa fa-align-justify handle"></i>
          <span class="text">{{ element.name }} </span>
          <input type="text" class="form-control" v-model="element.text" />
          <i class="fa fa-times close" @click="removeAt(idx)"></i>
        </li>
        <div slot="header" class="btn-group list-group-item">
          <button class="btn btn-secondary button" @click="add">Add</button>
        </div>
      </draggable>
    </div>

    <div class="col-md-4">
      <h3>Project 2</h3>
      <draggable tag="ul" :list="list2" class="list-group" handle=".handle">
        <li class="list-group-item" v-for="(element, idx) in list2" :key="element.name">
          <i class="fa fa-align-justify handle"></i>
          <span class="text">{{ element.name }} </span>
          <input type="text" class="form-control" v-model="element.text" />
          <i class="fa fa-times close" @click="removeAt2(idx)"></i>
        </li>
        <div slot="header" class="btn-group list-group-item">
          <button class="btn btn-secondary button" @click="add2">Add</button>
        </div>
      </draggable>
    </div>

    <div class="col-md-4">
      <h3>Project 3</h3>
      <draggable tag="ul" :list="list3" class="list-group" handle=".handle">
        <li class="list-group-item" v-for="(element, idx) in list3" :key="element.name">
          <i class="fa fa-align-justify handle"></i>
          <span class="text">{{ element.name }} </span>
          <input type="text" class="form-control" v-model="element.text" />
          <i class="fa fa-times close" @click="removeAt3(idx)"></i>
        </li>
        <div slot="header" class="btn-group list-group-item">
          <button class="btn btn-secondary button" @click="add3">Add</button>
        </div>
      </draggable>
    </div>

    <div class="col-md-4">
      <h3>Project 4</h3>
      <draggable tag="ul" :list="list4" class="list-group" handle=".handle">
        <li class="list-group-item" v-for="(element, idx) in list4" :key="element.name">
          <i class="fa fa-align-justify handle"></i>
          <span class="text">{{ element.name }} </span>
          <input type="text" class="form-control" v-model="element.text" />
          <i class="fa fa-times close" @click="removeAt4(idx)"></i>
        </li>
        <div slot="header" class="btn-group list-group-item">
          <button class="btn btn-secondary button" @click="add4">Add</button>
        </div>
      </draggable>
    </div>

    <div class="col-md-4">
      <h3>Project 5</h3>
      <draggable tag="ul" :list="list5" class="list-group" handle=".handle">
        <li class="list-group-item" v-for="(element, idx) in list5" :key="element.name">
          <i class="fa fa-align-justify handle"></i>
          <span class="text">{{ element.name }} </span>
          <input type="text" class="form-control" v-model="element.text" />
          <i class="fa fa-times close" @click="removeAt5(idx)"></i>
        </li>
        <div slot="header" class="btn-group list-group-item">
          <button class="btn btn-secondary button" @click="add5">Add</button>
        </div>
      </draggable>
    </div>

    <div class="col-md-4">
      <h3>Project 6</h3>
      <draggable tag="ul" :list="list6" class="list-group" handle=".handle">
        <li class="list-group-item" v-for="(element, idx) in list6" :key="element.name">
          <i class="fa fa-align-justify handle"></i>
          <span class="text">{{ element.name }} </span>
          <input type="text" class="form-control" v-model="element.text" />
          <i class="fa fa-times close" @click="removeAt6(idx)"></i>
        </li>
        <div slot="header" class="btn-group list-group-item">
          <button class="btn btn-secondary button" @click="add6">Add</button>
        </div>
      </draggable>
    </div>
    <div class="row" style=" margin-top: 10%;  padding: 1px;">
      <div class="col-mb-3">
        <div>
        <b-card bg-variant="dark" title="Functional Requirements"
          img-src="https://thumbs.gfycat.com/PinkPiercingBull-size_restricted.gif" img-alt="Image" img-top tag="article"
          style="max-width: 18rem; max-height: 19rem;">
          <b-card-text>
            Express function or feature and define what is required
          </b-card-text>
        </b-card>
      </div>
      </div>
      <div class="col-mb-3">
        <div>
        <b-img class="img-circle" width="280" height="280" 
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ae38db72352761.5be596820e239.gif"></b-img>
      </div>
      </div>
      <div class="col-mb-3">
        <div>
        <b-img class="img-circle" width="280" height="280" 
          src="https://i.pinimg.com/originals/96/18/a6/9618a64ffc8b56bfaa1f071617f4a061.gif"></b-img>
      </div>
      </div>
      <div class="col-mb-3">
        <div>
        <b-card bg-variant="danger" title="Non-Functional Requirements"
          img-src="https://thumbs.gfycat.com/PinkPiercingBull-size_restricted.gif" img-alt="Image" img-top tag="article"
          style="max-width: 18rem; max-height: 19rem;" class="mb-2">
          <b-card-text>
            Define how well, or to what level a solution needs to behave
          </b-card-text>
          <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
        </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  let id = 0;
  import draggable from "vuedraggable";
  export default {
    order: 5,
    components: {
      draggable
    },
    data() {
      return {
        list: [{
            name: "Task 1",
            text: "",
            id: 1
          },
          {
            name: "Task 2",
            text: "",
            id: 2
          },
          {
            name: "Task 3",
            text: "",
            id: 3
          }
        ],
        list2: [{
            name: "Task 1",
            id: 1,
            text: ""
          },
          {
            name: "Task 2",
            id: 2,
            text: ""
          }
        ],
        list3: [{
            name: "Task 1",
            id: 1,
            text: ""
          },
          {
            name: "Task 2",
            id: 2,
            text: ""
          }
        ],
        list4: [{
            name: "Task 1",
            id: 1,
            text: ""
          },
          {
            name: "Task 2",
            id: 2,
            text: ""
          }
        ],
        list5: [{
            name: "Task 1",
            id: 1,
            text: ""
          },
          {
            name: "Task 2",
            id: 2,
            text: ""
          }
        ],
        list6: [{
            name: "Task 1",
            id: 1,
            text: ""
          },
          {
            name: "Task 2",
            id: 2,
            text: ""
          }
        ],
        dragging: true
      };
    },
    computed: {
      draggingInfo() {
        return this.dragging ? "under drag" : "";
      }
    },
    methods: {
      removeAt(idx) {
        this.list.splice(idx, 1);
      },
      add: function () {
        var idC1 = this.list;
        var idC2 = Math.max.apply(Math, this.list.map(function (o) {
          return o.id;
        }))
        console.log(idC1);
        console.log(idC2);
        var iid;
        if (this.list.length <= 0) {
          iid = 0;
        } else {
          iid = idC2
        }
        iid++;
        this.list.push({
          name: "Task " + iid,
          id: iid,
          text: ""
        });
      },
      removeAt2(idx) {
        this.list2.splice(idx, 1);
      },
      add2: function () {
        var idC1 = this.list2;
        var idC2 = Math.max.apply(Math, this.list2.map(function (o) {
          return o.id;
        }))
        console.log(idC1);
        console.log(idC2);
        var iid;
        if (this.list2.length <= 0) {
          iid = 0;
        } else {
          iid = idC2
        }
        iid++;
        this.list2.push({
          name: "Task " + iid,
          id: iid,
          text: ""
        });
      },
      removeAt3(idx) {
        this.list3.splice(idx, 1);
      },
      add3: function () {
        var idC1 = this.list3;
        var idC2 = Math.max.apply(Math, this.list3.map(function (o) {
          return o.id;
        }))
        console.log(idC1);
        console.log(idC2);
        var iid;
        if (this.list3.length <= 0) {
          iid = 0;
        } else {
          iid = idC2
        }
        iid++;
        this.list3.push({
          name: "Task " + iid,
          id: iid,
          text: ""
        });
      },
      removeAt4(idx) {
        this.list4.splice(idx, 1);
      },
      add4: function () {
        var idC1 = this.list4;
        var idC2 = Math.max.apply(Math, this.list4.map(function (o) {
          return o.id;
        }))
        console.log(idC1);
        console.log(idC2);
        var iid;
        if (this.list4.length <= 0) {
          iid = 0;
        } else {
          iid = idC2
        }
        iid++;
        this.list4.push({
          name: "Task " + iid,
          id: iid,
          text: ""
        });
      },
      removeAt5(idx) {
        this.list5.splice(idx, 1);
      },
      add5: function () {
        var idC1 = this.list5;
        var idC2 = Math.max.apply(Math, this.list5.map(function (o) {
          return o.id;
        }))
        console.log(idC1);
        console.log(idC2);
        var iid;
        if (this.list5.length <= 0) {
          iid = 0;
        } else {
          iid = idC2
        }
        iid++;
        this.list5.push({
          name: "Task " + iid,
          id: iid,
          text: ""
        });
      },
      removeAt6(idx) {
        this.list6.splice(idx, 1);
      },
      add6: function () {
        var idC1 = this.list6;
        var idC2 = Math.max.apply(Math, this.list6.map(function (o) {
          return o.id;
        }))
        console.log(idC1);
        console.log(idC2);
        var iid;
        if (this.list6.length <= 0) {
          iid = 0;
        } else {
          iid = idC2
        }
        iid++;
        this.list6.push({
          name: "Task " + iid,
          id: iid,
          text: ""
        });
      }
    }
  };

</script>
<style scoped>
  .button {
    display: block;
    /* margin: 10px 0;
    padding: 10px; */
    width: 100%;
  }

  .handle {
    float: left;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .close {
    float: right;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  input {
    display: inline-block;
    width: 50%;
  }

  .text {
    margin: 20px;
  }

</style>
