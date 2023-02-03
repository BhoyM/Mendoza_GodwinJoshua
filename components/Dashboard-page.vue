<template>
  <div>
    <nav id="sidebar" class="p-3" style="background-color: orange">
      <div class="sidebar-header">
        <h3>Dashboard</h3>
      </div>

        <ul id="accordionSidebar" class="navbar-nav text-light">

        <NuxtLink to="/homepage">
            <li class="nav-item"><a class="nav-link active"><span>Home</span></a></li>
        </NuxtLink>
        <NuxtLink to="/dashboard">
            <li class="nav-item"><a class="nav-link"><span>Dashboard</span></a></li>
        </NuxtLink>
    </ul>
    </nav>
    <div class="container" style="padding: 4rem; margin-left:250px">
      <div>
      <h3>Dashboard</h3>
      <hr>
      <h4>Add Students</h4>
      </div>
      <br>
      <div class="form-inline" action="#">
      <input v-model="item.name" id="FName"  type="text"  placeholder="First Name" class="form-control">
      <input v-model="item.lastname" id="LName" type="text" placeholder="Last Name" class="form-control">
      <button class="btn btn-dark" @click="addItem" id="AddUser"><i class="fas fa-plus">Add</i></button>
        </div>
      <br><br>
      <table class="table table-striped table-bordered table-sm" id="MyTable">
        <thead class="thead-light">
          <th>First Name</th>
          <th>Last Name</th>
          <th class="col-2">Edit/Delete</th>
        </thead>
        <tr v-for="item in items" v-bind:key="item.name">
          <td>
            <input v-if="item.edit" v-model="item.name" type="text">
            <span v-else>{{item.name}}</span>
          </td>
          <td>
            <input v-if="item.edit" v-model="item.lastname" type="text">
            <span v-else>{{item.lastname}}</span>
          </td>
          <td>
            <button class="btn btn-info" @click="ItemEdit(item)">edit</button>
            <button class="btn btn-danger" @click="removeItem(item)">delete</button></td>
        </tr>
      </table>
  </div>
  </div>

  </template>

  <script scope>
  const url = "http://localhost:3002/users";
    export default {
      data() {
      return {
        item: {id: 0, name: "", lastname: "", edit: false},
        items: [],
        tempData: []
      }
    },
    methods:{
      async addItem() {
        console.log(this.item.id);
        await this.$axios.$post(url + '/insert', this.item)
        .then((res) => {
          console.log(res);
          this.item = {id: 0, name: "", lastname: "", edit: false};
          this.GetAllData();
        })
        .catch((err) => console.log(err));
      },
      async removeItem(item){
        await this.$axios.$post(url + '/delete', { id: item.id })
        .then((res) => {
          console.log(res);
          this.GetAllData();
        })
        .catch((err) => console.log(err));
      },
      GetCurrentID(){
      this.item.id = Math.max.apply(Math, this.items.map(function(o) { return o.id; })) + 1;
      console.log(this.item);
      },
      async GetAllData(){
        await this.$axios.$get(url)
      .then((res) => {
        console.log(res);
        this.tempData = res;
      })
      .catch((err) => console.log(err));
      this.items = this.tempData;
      this.GetCurrentID();
      },
      async ItemEdit(item)
      {
        if(!item.edit)
        {
          item.edit = !item.edit
        }
        else
        {
          item.edit = !item.edit
          console.log(item);
          await this.$axios.$post(url + '/update', item)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
        }
      }
    },
    async mounted(){
      await this.GetAllData();
    }
    }
  </script>

<style scoped>
.form-inline input {
  margin-right:8px;
}


</style>
