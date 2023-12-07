<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Total Students</h4>
              <p class="card-category">Table about the number total students </p>
            </template>
            <l-table class="table-hover table-striped"
                     :columns="table1.columns"
                     :data="table1.data">
            </l-table>
          </card>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import LTable from 'src/components/Table.vue'
  const tableColumns = ['Id', 'Name', 'Email', 'Telefono', 'Options']
  const tableData = [{
    id: 1,
    name: 'Dakota Rice',
    email: 'dakota@corre.com',
    telefono: '447512',
    options: 'edit'
  },
  {
    id: 2,
    name: 'Minerva Hooper',
    email: 'minerva@correo.com',
    telefono: '72230940',
    options: 'edit'
  }]
  export default {
    components: {
      LTable
    },
    data () {
      return {
        table1: {
          columns: [...tableColumns],
          data: [...tableData]
        },
      }
    }
  }

</script>
<style>

</style>
