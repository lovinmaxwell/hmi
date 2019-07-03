<template>
  <div class="row">
    <div class="col-4">
      <h3>Project Phase 1</h3>

      <draggable
        :list="list"
        class="list-group"
        draggable=".item"
        group="a"
      >
        <div
          class="list-group-item item"
          v-for="element in list"
          :key="element.name"
        >
          {{ element.name }}
        </div>

        <div
          slot="header"
          class="btn-group list-group-item"
          role="group"
          aria-label="Basic example"
        >
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
      <h3>Project Phase 2</h3>

      <draggable :list="list2" 
      class="list-group" 
      draggable=".item" group="a">
        <div
          class="list-group-item item"
          v-for="element in list2"
          :key="element.name"
        >
          {{ element.name }}
        </div>

        <div
          slot="header"
          class="btn-group list-group-item"
          role="group"
          aria-label="Basic example"
        >
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
      <h3>Project Phase 3</h3>
      <draggable :list="list3" class="list-group" draggable=".item" group="a">
        <div
          class="list-group-item item"
          v-for="element in list3"
          :key="element.name"
        >
          {{ element.name }}
        </div>

        <div
          slot="header"
          class="btn-group list-group-item"
          role="group"
          aria-label="Basic example"
        >
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
      <h3>Project Phase 4</h3>

      <draggable
        :list="list4"
        class="list-group"
        draggable=".item"
        group="a"
      >
        <div
          class="list-group-item item"
          v-for="element in list4"
          :key="element.name"
        >
          {{ element.name }}
        </div>

        <div
          slot="header"
          class="btn-group list-group-item"
          role="group"
          aria-label="Basic example"
        >
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
  </div>
</template>

<script>
import draggable from "vuedraggable";
let id = 1;
export default {
  order: 14,
  components: {
    draggable
  },
  data() {
    return {
      list: [
        { name: "Task 1", id: 0 },
        { name: "Task 2", id: 1 },
        { name: "Task 3", id: 2 }
      ],
      list2: [
        { name: "Task 4", id: 3 }, 
        { name: "Task 5", id: 4 }
        ],
      list3: [
        { name: "Task 6", id: 5 },
        { name: "Task 7", id: 6 },
        { name: "Task 8", id: 7 }
      ],
      list4: [
        { name: "Task 9 ", id: 8 },
        { name: "Task 10 ", id: 9 },
        { name: "Task 11", id: 10 }
      ]
    };
  },
  methods: {
    add: function() {
      this.list.push({ name: "Task " + id, id: id++ });
    },
    replace: function() {
      this.list = [{ name: "Scope 1", id: id++ }];
    },
    add2: function() {
      this.list2.push({ name: "Task " + id, id: id++ });
    },
    replace2: function() {
      this.list2 = [{ name: "Scope 2", id: id++ }];
    },
    add3: function() {
      this.list3.push({ name: "Task " + id, id: id++ });
    },
    replace3: function() {
      this.list3 = [{ name: "Scope 3", id: id++ }];
    },
    add4: function() {
      this.list4.push({ name: "Task " + id, id: id++ });
    },
    replace4: function() {
      this.list4 = [{ name: "Scope 4", id: id++ }];
    }
    
  }
};
</script>
<style scoped></style>
