<template>
  <div class="row">
    <div class="col-4">
      <h3>Project Phase 1</h3>

      <draggable
        id="first"
        data-source="juju"
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
          slot="footer"
          class="btn-group list-group-item"
          role="group"
          aria-label="Basic example"
        >
          <button class="btn btn-secondary" @click="add">Add</button>
          <button class="btn btn-secondary" @click="replace">Replace</button>
        </div>
      </draggable>
    </div>

    <div class="col-4">
      <h3>Project Phase 2</h3>

      <draggable :list="list2" class="list-group" draggable=".item" group="a">
        <div
          class="list-group-item item"
          v-for="element in list2"
          :key="element.name"
        >
          {{ element.name }}
        </div>

        <div
          slot="footer"
          class="btn-group list-group-item"
          role="group"
          aria-label="Basic example"
        >
          <button class="btn btn-secondary" @click="add2">Add</button>
          <button class="btn btn-secondary" @click="replace2">Replace</button>
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
          slot="footer"
          class="btn-group list-group-item"
          role="group"
          aria-label="Basic example"
        >
          <button class="btn btn-secondary" @click="add3">Add</button>
          <button class="btn btn-secondary" @click="replace3">Replace</button>
        </div>
      </draggable>
    </div>

   <div class="col-4">
      <h3>Project Phase 4</h3>

      <draggable
        id="first"
        data-source="juju"
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
          slot="footer"
          class="btn-group list-group-item"
          role="group"
          aria-label="Basic example"
        >
          <button class="btn btn-secondary" @click="add4">Add</button>
          <button class="btn btn-secondary" @click="replace4">Replace</button>
        </div>
      </draggable>
    </div>

    <!-- <rawDisplayer class="col-2" :value="list" title="List" />

    <rawDisplayer class="col-2" :value="list2" title="List2" /> -->
  </div>
</template>

<script>
import draggable from "vuedraggable";
let id = 1;
export default {
  name: "two-list-headerslots",
  display: "Two list header slot",
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
      this.list.push({ name: "Juan " + id, id: id++ });
    },
    replace: function() {
      this.list = [{ name: "Edgard", id: id++ }];
    },
    add2: function() {
      this.list2.push({ name: "Juan " + id, id: id++ });
    },
    replace2: function() {
      this.list2 = [{ name: "Edgard", id: id++ }];
    },
    add3: function() {
      this.list3.push({ name: "Juan " + id, id: id++ });
    },
    replace3: function() {
      this.list3 = [{ name: "Edgard", id: id++ }];
    },
    add4: function() {
      this.list4.push({ name: "Juan " + id, id: id++ });
    },
    replace4: function() {
      this.list4 = [{ name: "Edgard", id: id++ }];
    }
    
  }
};
</script>
<style scoped></style>
