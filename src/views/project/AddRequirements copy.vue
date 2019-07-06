 <template>
  <div class="row">
    <div class="col-4">
      <h3>Project 1</h3>

      <draggable :list="list" class="list-group" draggable=".item" group="a">
        <div class="list-group-item item" v-for="element in list" :key="element.name">
          {{ element.name }}
        </div>
        

        <div slot="header" class="btn-group list-group-item" role="group" aria-label="Basic example">
          <div class="row">
            <div class="text-left col-md-6">
              <button class="btn btn-secondary" @click="add">Add</button>
            </div>
            <div class="text-right col-md-6">
              <button class="btn btn-secondary" @click="replace">Replace</button>
            </div>
          </div>
        </div>
      </draggable>
    </div>

    <div class="col-4">
      <h3>Project 2</h3>

      <draggable :list="list2" class="list-group" draggable=".item" group="a">
        <div class="list-group-item item" v-for="element in list2" :key="element.name">
          {{ element.name }}
        </div>

        <div slot="header" class="btn-group list-group-item" role="group" aria-label="Basic example">
          <div class="row">
            <div class="text-left col-md-6">
              <button class="btn btn-secondary" @click="add2">Add</button>
            </div>
            <div class="text-right col-md-6">
              <button class="btn btn-secondary" @click="replace2">Replace</button>
            </div>
          </div>
        </div>
      </draggable>
    </div>

    <div class="col-4">
      <h3>Project 3</h3>
      <draggable :list="list3" class="list-group" draggable=".item" group="a">
        <div class="list-group-item item" v-for="element in list3" :key="element.name">
          {{ element.name }}
        </div>

        <div slot="header" class="btn-group list-group-item" role="group" aria-label="Basic example">
          <div class="row">
            <div class="text-left col-md-6">
              <button class="btn btn-secondary" @click="add3">Add</button>
            </div>
            <div class="text-right col-md-6">
              <button class="btn btn-secondary" @click="replace3">Replace</button>
            </div>
          </div>
        </div>
      </draggable>
    </div>

    <div class="col-4">
      <h3>Project 4</h3>
      <draggable :list="list4" class="list-group" draggable=".item" group="a">
        <div class="list-group-item item" v-for="element in list4" :key="element.name">
          {{ element.name }}
        </div>

        <div slot="header" class="btn-group list-group-item" role="group" aria-label="Basic example">
          <div class="row">
            <div class="text-left col-md-6">
              <button class="btn btn-secondary" @click="add4">Add</button>
            </div>
            <div class="text-right col-md-6">
              <button class="btn btn-secondary" @click="replace4">Replace</button>
            </div>
          </div>
        </div>
      </draggable>
    </div>

     <div class="col-4">
      <h3>Project 5</h3>
      <draggable :list="list4" class="list-group" draggable=".item" group="a">
        <div class="list-group-item item" v-for="element in list4" :key="element.name">
          {{ element.name }}
        </div>

        <div slot="header" class="btn-group list-group-item" role="group" aria-label="Basic example">
          <div class="row">
            <div class="text-left col-md-6">
              <button class="btn btn-secondary" @click="add4">Add</button>
            </div>
            <div class="text-right col-md-6">
              <button class="btn btn-secondary" @click="replace4">Replace</button>
            </div>
          </div>
        </div>
      </draggable>
    </div>

     <div class="col-4">
      <h3>Project 6</h3>
      <draggable :list="list4" class="list-group" draggable=".item" group="a">
        <div class="list-group-item item" v-for="element in list4" :key="element.name">
          {{ element.name }}
        </div>

        <div slot="header" class="btn-group list-group-item" role="group" aria-label="Basic example">
          <div class="row">
            <div class="text-left col-md-6">
              <button class="btn btn-secondary" @click="add4">Add</button>
            </div>
            <div class="text-right col-md-6">
              <button class="btn btn-secondary" @click="replace4">Replace</button>
            </div>
          </div>
        </div>
      </draggable>
    </div>

    <b-card bg-variant="dark" title="Functional Requirements"
      img-src="https://thumbs.gfycat.com/PinkPiercingBull-size_restricted.gif" img-alt="Image" img-top tag="article"
      style=" position: absolute; right: 735px; top: 700px;  max-width: 18rem; max-height: 19rem;" class="mb-2">
      <b-card-text>
        Express function or feature and define what is required
      </b-card-text>
      <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
    </b-card>

    <b-img class="img-circle" width="280" height="280" style=" position: absolute; top: 700px; right: 1080px"
      src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ae38db72352761.5be596820e239.gif"></b-img>
    
    <b-img class="img-circle" width="280" height="280" style=" position: absolute; top: 700px; right: 390px"
      src="https://i.pinimg.com/originals/96/18/a6/9618a64ffc8b56bfaa1f071617f4a061.gif"></b-img>

    <b-card bg-variant="danger" title="Non-Functional Requirements"
      img-src="https://thumbs.gfycat.com/PinkPiercingBull-size_restricted.gif" img-alt="Image" img-top tag="article"
      style=" position: absolute; right: 70px; top: 700px; max-width: 18rem; max-height: 19rem;" class="mb-2">
      <b-card-text>
        Define how well, or to what level a solution needs to behave
      </b-card-text>
      <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
    </b-card>

  </div>
</template>
 
<script>
  import draggable from "vuedraggable";
  let id = 12;
  export default {
    order: 14,
    components: {
      draggable
    },
    data() {
      return {
        list: [{
            name: "Task 1",
            id: 0
          },
          {
            name: "Task 2",
            id: 1
          },
          {
            name: "Task 3",
            id: 2
          }
        ],
        list2: [{
            name: "Task 4",
            id: 3
          },
          {
            name: "Task 5",
            id: 4
          }
        ],
        list3: [{
            name: "Task 6",
            id: 5
          },
          {
            name: "Task 7",
            id: 6
          },
          {
            name: "Task 8",
            id: 7
          }
        ],
        list4: [{
            name: "Task 9 ",
            id: 8
          },
          {
            name: "Task 10 ",
            id: 9
          },
          
        ]
      };
    },
    methods: {
      add: function () {
        this.list.push({
          name: "Task " + id,
          id: id++
        });
      },
      replace: function () {
        this.list = [{
          name: "Scope 1",
          id: id++
        }];
      },
      add2: function () {
        this.list2.push({
          name: "Task " + id,
          id: id++
        });
      },
      replace2: function () {
        this.list2 = [{
          name: "Scope 2",
          id: id++
        }];
      },
      add3: function () {
        this.list3.push({
          name: "Task " + id,
          id: id++
        });
      },
      replace3: function () {
        this.list3 = [{
          name: "Scope 3",
          id: id++
        }];
      },
      add4: function () {
        this.list4.push({
          name: "Task " + id,
          id: id++
        });
      },
      replace4: function () {
        this.list4 = [{
          name: "Scope 4",
          id: id++
        }];
      }

    }
  };

</script>
<style scoped></style>
