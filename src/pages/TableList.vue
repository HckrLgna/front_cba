<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title"> Question bank </h4>
              <p class="card-category">Table about total question bank </p>
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

  const tableColumns = ['Id', 'Topic', 'questions', 'Options']
  const tableData = [{
    id: 1,
    topic: 'Dakota Rice',
    questions: '4',
    options: 'edit',
  },
  {
    id: 2,
    topic: 'Minerva Hooper',
    questions: '6',
    options: 'edit',
  } ]
  export default {
    components: {
      LTable,

    },
    data () {
      return {
        table1: {
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }
</script>
<style>
</style>
