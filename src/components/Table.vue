<template>
  <div class="tableView">
    <v-toolbar 
    flat color="#a3a5a8"
    tabs
    
    >
      <v-spacer></v-spacer>
      <v-text-field class="text-xs-right" v-model="search" append-icon="search" label="Search" single-line></v-text-field>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
        <v-tabs
        slot="extension"
        v-model="tabs"
        centered
        color="transparent"
        slider-color="white"
      >
        <v-tab
          v-for="n in 3"
          :key="n"
        >
          Item {{ n }}
        </v-tab>
      </v-tabs>

      <v-dialog v-model="dialog" max-width="700px">
        <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                    <v-flex> 
                  <v-text-field v-model="editedPatient.bactNr" label="Bact Nummer"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.altId" label="altId"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.pathogen" label="pathogen (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.patName" label="Patient Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.birthdate" label="birthdate"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.entry" label="entry"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.abnahme" label="abnahme"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.sender" label="sender"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.station" label="station"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.editing" label="editing"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.material" label="material"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.ngsProject" label="ngsProject"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.dnaPrepDate" label="dnaPrepDate"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.dnaKonz" label="dnaKonz"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.dnaVisum" label="dnaVisum"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.runNr" label="runNr"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.ngsNr" label="ngsNr"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.libType" label="libType"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.libDate" label="libDate"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.libVisum" label="libVisum"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.seqDate" label="seqDate"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.ngsMachine" label="ngsMachine"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.qualityVisum" label="qualityVisum"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.infOldList" label="infOldList"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedPatient.pubID" label="pubID"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
        <v-tabs-items v-model="tabs">
      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
    <v-data-table
      :headers="headers"
      :items="patients"
      :search="search"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props" class="dataSet">

        <td class="text-xs-left">{{ props.item.bactNr }}</td>
        <td class="text-xs-center">{{ props.item.altId }}</td>
        <td class="text-xs-center">{{ props.item.pathogen }}</td>
        <td class="text-xs-center">{{ props.item.patName }}</td>
        <td class="text-xs-center">{{ props.item.birthdate }}</td>
        <td class="text-xs-center">{{ props.item.entry }}</td>
        <td class="text-xs-center">{{ props.item.abnahme }}</td>
        <td class="text-xs-center">{{ props.item.sender }}</td>
        <td class="text-xs-center">{{ props.item.station }}</td>
        <td class="text-xs-center">{{ props.item.editing }}</td>
        <td class="text-xs-center">{{ props.item.ngsProject }}</td>
        <td class="text-xs-center">{{ props.item.dnaPrepDate }}</td>
        <td class="text-xs-center">{{ props.item.dnaKonz }}</td>
        <td class="text-xs-center">{{ props.item.dnaVisum }}</td>
        <td class="text-xs-center">{{ props.item.runNr }}</td>
        <td class="text-xs-center">{{ props.item.libDate }}</td>
        <td class="text-xs-center">{{ props.item.libVisum }}</td>
        <td class="text-xs-center">{{ props.item.seqDate }}</td>
        <td class="text-xs-center">{{ props.item.ngsMachine }}</td>
        <td class="text-xs-center">{{ props.item.qualityVisum }}</td>
        <td class="text-xs-center">{{ props.item.infOldList }}</td>
        <td class="text-xs-center">{{ props.item.pubID }}</td>
        <td class="text-xs-center">{{ props.item.birthdate }}</td>
        <td class="text-xs-center">{{ props.item.birthdate }}</td>
        <td class="text-xs-center">{{ props.item.birthdate }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
       <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
     </v-tab-item>
    </v-tabs-items>
        <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      pagination: {},
      search:'',
      tabs: null,
      headers: [
        {class:'dataSet',text: 'Bact Nr-', sortable: true, value: 'bactNr'},
        { text: 'Alternative ID', value: 'altId' },
        {text: 'Pathogen', value: 'pathogen' },
        {class:'dataSet', text: 'Patient', value: 'patName' },
        { text: 'Geburtsdatum', value: 'birthdate' },
        { text: 'Eingang', value: 'entry', sortable: false },
        { text: 'Abnahme', value: 'abnahme' },
        { text: 'Einsender', value: 'sender' },
        { text: 'Station', value: 'station' },
        { text: 'Bearbeitung', value: 'editing' },
        { text: 'Material', value: 'material' },
        { text: 'NGS-Projekt', value: 'ngsProject' },
        { text: 'Datum DNA-Prep', value: 'dnaPrepDate' },
        { text: 'DNA-Konz (ng/ul)', value: 'dnaKonz' },
        { text: 'Visum DNA', value: 'dnaVisum' },
        { text: 'Run Nummer', value: 'runNr' },
        { text: 'NGS Nummer', value: 'ngsNr' },
        { text: 'Library Typ', value: 'libType' },
        { text: 'Datum Library', value: 'libDate' },
        { text: 'Visum Library', value: 'libVisum' },
        { text: 'Datum Sequenzierung', value: 'seqDate' },
        { text: 'NGS Gerät', value: 'ngsMachine' },
        { text: 'Visum Datenqualität', value: 'qualityVisum' },
        { text: 'Information alte Liste', value: 'infOldList' },
        { text: 'Public identifier', value: 'pubID' },
      ],
      patients: [],
      editedIndex: -1,
      editedPatient: {
        bactNr: '',
        infOldList: '',
        altId: '',
        pathogen: '',
        patName: '',
        birthdate: '',
        entry: '',
        abnahme: '',
        sender: '',
        station: '',
        editing: '',
        material: '',
        ngsProject: '',
        dnaPrepDate: '',
        dnaKonz: '',
        dnaVisum: '',
        runNr: '',
        ngsNr: '',
        libType: '',
        libDate: '',
        libVisum: '',
        seqDate: '',
        ngsMachine: '',
        qualityVisum: '',
        pubID: '',
      },
      defaultPatient: {
        bactNr: '',
        infOldList: '',
        altId: '',
        pathogen: '',
        patName: '',
        birthdate: '',
        entry: '',
        abnahme: '',
        sender: '',
        station: '',
        editing: '',
        material: '',
        ngsProject: '',
        dnaPrepDate: '',
        dnaKonz: '',
        dnaVisum: '',
        runNr: '',
        ngsNr: '',
        libType: '',
        libDate: '',
        libVisum: '',
        seqDate: '',
        ngsMachine: '',
        qualityVisum: '',
        pubID: '',
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.patients = [
          {
        bactNr: '100007-18',
        infOldList: '2342342',
        altId: 'ID-001',
        pathogen: 'ecoli',
        patName: 'Donald Truck',
        birthdate: '12.03.1950',
        entry: '13.11.2018',
        abnahme: '14.11.2018',
        sender: 'Spital Basel',
        station: 'Intensiv',
        editing: '16.11.2018',
        material: 'Blut',
        ngsProject: 'NGS000012',
        dnaPrepDate: '18.11.2018',
        dnaKonz: '34',
        dnaVisum: 'BMA',
        runNr: '00542',
        ngsNr: '4230498',
        libType: 'next Generation',
        libDate: '20.08.2017',
        libVisum:'BMA',
        seqDate: '20.11.2018',
        ngsMachine: 'NextSeq',
        qualityVisum: 'BMA',
        pubID: '00001',
          },
          {
        bactNr: '100007-18',
        infOldList: '2342342',
        altId: 'ID-001',
        pathogen: 'ecoli',
        patName: 'Donald Truck',
        birthdate: '12.03.1950',
        entry: '13.11.2018',
        abnahme: '14.11.2018',
        sender: 'Spital Basel',
        station: 'Intensiv',
        editing: '16.11.2018',
        material: 'Blut',
        ngsProject: 'NGS000012',
        dnaPrepDate: '18.11.2018',
        dnaKonz: '34',
        dnaVisum: 'BMA',
        runNr: '00542',
        ngsNr: '4230498',
        libType: 'next Generation',
        libDate: '20.08.2017',
        libVisum:'BMA',
        seqDate: '20.11.2018',
        ngsMachine: 'NextSeq',
        qualityVisum: 'BMA',
        pubID: '00001',
          },
          {
        bactNr: '100007-18',
        infOldList: '2342342',
        altId: 'ID-001',
        pathogen: 'ecoli',
        patName: 'Donald Truck',
        birthdate: '12.03.1950',
        entry: '13.11.2018',
        abnahme: '14.11.2018',
        sender: 'Spital Basel',
        station: 'Intensiv',
        editing: '16.11.2018',
        material: 'Blut',
        ngsProject: 'NGS000012',
        dnaPrepDate: '18.11.2018',
        dnaKonz: '34',
        dnaVisum: 'BMA',
        runNr: '00542',
        ngsNr: '4230498',
        libType: 'next Generation',
        libDate: '20.08.2017',
        libVisum:'BMA',
        seqDate: '20.11.2018',
        ngsMachine: 'NextSeq',
        qualityVisum: 'BMA',
        pubID: '00001',
          },
          {
        bactNr: '100007-18',
        infOldList: '2342342',
        altId: 'ID-001',
        pathogen: 'ecoli',
        patName: 'Donald Truck',
        birthdate: '12.03.1950',
        entry: '13.11.2018',
        abnahme: '14.11.2018',
        sender: 'Spital Basel',
        station: 'Intensiv',
        editing: '16.11.2018',
        material: 'Blut',
        ngsProject: 'NGS000012',
        dnaPrepDate: '18.11.2018',
        dnaKonz: '34',
        dnaVisum: 'BMA',
        runNr: '00542',
        ngsNr: '4230498',
        libType: 'next Generation',
        libDate: '20.08.2017',
        libVisum:'BMA',
        seqDate: '20.11.2018',
        ngsMachine: 'NextSeq',
        qualityVisum: 'BMA',
        pubID: '00001',
          },
          {
        bactNr: '100007-18',
        infOldList: '2342342',
        altId: 'ID-001',
        pathogen: 'ecoli',
        patName: 'Donald Truck',
        birthdate: '12.03.1950',
        entry: '13.11.2018',
        abnahme: '14.11.2018',
        sender: 'Spital Basel',
        station: 'Intensiv',
        editing: '16.11.2018',
        material: 'Blut',
        ngsProject: 'NGS000012',
        dnaPrepDate: '18.11.2018',
        dnaKonz: '34',
        dnaVisum: 'BMA',
        runNr: '00542',
        ngsNr: '4230498',
        libType: 'next Generation',
        libDate: '20.08.2017',
        libVisum:'BMA',
        seqDate: '20.11.2018',
        ngsMachine: 'NextSeq',
        qualityVisum: 'BMA',
        pubID: '00001',
          },
          {
        bactNr: '100007-18',
        infOldList: '2342342',
        altId: 'ID-001',
        pathogen: 'ecoli',
        patName: 'Donald Truck',
        birthdate: '12.03.1950',
        entry: '13.11.2018',
        abnahme: '14.11.2018',
        sender: 'Spital Basel',
        station: 'Intensiv',
        editing: '16.11.2018',
        material: 'Blut',
        ngsProject: 'NGS000012',
        dnaPrepDate: '18.11.2018',
        dnaKonz: '34',
        dnaVisum: 'BMA',
        runNr: '00542',
        ngsNr: '4230498',
        libType: 'next Generation',
        libDate: '20.08.2017',
        libVisum:'BMA',
        seqDate: '20.11.2018',
        ngsMachine: 'NextSeq',
        qualityVisum: 'BMA',
        pubID: '00001',
          },
          {
        bactNr: '100007-18',
        infOldList: '2342342',
        altId: 'ID-001',
        pathogen: 'ecoli',
        patName: 'Donald Truck',
        birthdate: '12.03.1950',
        entry: '13.11.2018',
        abnahme: '14.11.2018',
        sender: 'Spital Basel',
        station: 'Intensiv',
        editing: '16.11.2018',
        material: 'Blut',
        ngsProject: 'NGS000012',
        dnaPrepDate: '18.11.2018',
        dnaKonz: '34',
        dnaVisum: 'BMA',
        runNr: '00542',
        ngsNr: '4230498',
        libType: 'next Generation',
        libDate: '20.08.2017',
        libVisum:'BMA',
        seqDate: '20.11.2018',
        ngsMachine: 'NextSeq',
        qualityVisum: 'BMA',
        pubID: '00001',
          },
          {
        bactNr: '100007-18',
        infOldList: '2342342',
        altId: 'ID-001',
        pathogen: 'ecoli',
        patName: 'Donald Truck',
        birthdate: '12.03.1950',
        entry: '13.11.2018',
        abnahme: '14.11.2018',
        sender: 'Spital Basel',
        station: 'Intensiv',
        editing: '16.11.2018',
        material: 'Blut',
        ngsProject: 'NGS000012',
        dnaPrepDate: '18.11.2018',
        dnaKonz: '34',
        dnaVisum: 'BMA',
        runNr: '00542',
        ngsNr: '4230498',
        libType: 'next Generation',
        libDate: '20.08.2017',
        libVisum:'BMA',
        seqDate: '20.11.2018',
        ngsMachine: 'NextSeq',
        qualityVisum: 'BMA',
        pubID: '00001',
          },
          {
        bactNr: '100007-18',
        infOldList: '2342342',
        altId: 'ID-001',
        pathogen: 'ecoli',
        patName: 'Donald Truck',
        birthdate: '12.03.1950',
        entry: '13.11.2018',
        abnahme: '14.11.2018',
        sender: 'Spital Basel',
        station: 'Intensiv',
        editing: '16.11.2018',
        material: 'Blut',
        ngsProject: 'NGS000012',
        dnaPrepDate: '18.11.2018',
        dnaKonz: '34',
        dnaVisum: 'BMA',
        runNr: '00542',
        ngsNr: '4230498',
        libType: 'next Generation',
        libDate: '20.08.2017',
        libVisum:'BMA',
        seqDate: '20.11.2018',
        ngsMachine: 'NextSeq',
        qualityVisum: 'BMA',
        pubID: '00001',
          },
          {
        bactNr: '100007-18',
        infOldList: '2342342',
        altId: 'ID-001',
        pathogen: 'ecoli',
        patName: 'Donald Truck',
        birthdate: '12.03.1950',
        entry: '13.11.2018',
        abnahme: '14.11.2018',
        sender: 'Spital Basel',
        station: 'Intensiv',
        editing: '16.11.2018',
        material: 'Blut',
        ngsProject: 'NGS000012',
        dnaPrepDate: '18.11.2018',
        dnaKonz: '34',
        dnaVisum: 'BMA',
        runNr: '00542',
        ngsNr: '4230498',
        libType: 'next Generation',
        libDate: '20.08.2017',
        libVisum:'BMA',
        seqDate: '20.11.2018',
        ngsMachine: 'NextSeq',
        qualityVisum: 'BMA',
        pubID: '00001',
          },
          {
        bactNr: '100007-18',
        infOldList: '2342342',
        altId: 'ID-001',
        pathogen: 'ecoli',
        patName: 'Donald Truck',
        birthdate: '12.03.1950',
        entry: '13.11.2018',
        abnahme: '14.11.2018',
        sender: 'Spital Basel',
        station: 'Intensiv',
        editing: '16.11.2018',
        material: 'Blut',
        ngsProject: 'NGS000012',
        dnaPrepDate: '18.11.2018',
        dnaKonz: '34',
        dnaVisum: 'BMA',
        runNr: '00542',
        ngsNr: '4230498',
        libType: 'next Generation',
        libDate: '20.08.2017',
        libVisum:'BMA',
        seqDate: '20.11.2018',
        ngsMachine: 'NextSeq',
        qualityVisum: 'BMA',
        pubID: '00001',
          },
          {
        bactNr: '100007-18',
        infOldList: '2342342',
        altId: 'ID-001',
        pathogen: 'ecoli',
        patName: 'Donald Truck',
        birthdate: '12.03.1950',
        entry: '13.11.2018',
        abnahme: '14.11.2018',
        sender: 'Spital Basel',
        station: 'Intensiv',
        editing: '16.11.2018',
        material: 'Blut',
        ngsProject: 'NGS000012',
        dnaPrepDate: '18.11.2018',
        dnaKonz: '34',
        dnaVisum: 'BMA',
        runNr: '00542',
        ngsNr: '4230498',
        libType: 'next Generation',
        libDate: '20.08.2017',
        libVisum:'BMA',
        seqDate: '20.11.2018',
        ngsMachine: 'NextSeq',
        qualityVisum: 'BMA',
        pubID: '00001',
          },
          {
        bactNr: '100007-18',
        infOldList: '2342342',
        altId: 'ID-001',
        pathogen: 'ecoli',
        patName: 'Donald Truck',
        birthdate: '12.03.1950',
        entry: '13.11.2018',
        abnahme: '14.11.2018',
        sender: 'Spital Basel',
        station: 'Intensiv',
        editing: '16.11.2018',
        material: 'Blut',
        ngsProject: 'NGS000012',
        dnaPrepDate: '18.11.2018',
        dnaKonz: '34',
        dnaVisum: 'BMA',
        runNr: '00542',
        ngsNr: '4230498',
        libType: 'next Generation',
        libDate: '20.08.2017',
        libVisum:'BMA',
        seqDate: '20.11.2018',
        ngsMachine: 'NextSeq',
        qualityVisum: 'BMA',
        pubID: '00001',
          },
          {
        bactNr: '100007-18',
        infOldList: '2342342',
        altId: 'ID-001',
        pathogen: 'ecoli',
        patName: 'Donald Truck',
        birthdate: '12.03.1950',
        entry: '13.11.2018',
        abnahme: '14.11.2018',
        sender: 'Spital Basel',
        station: 'Intensiv',
        editing: '16.11.2018',
        material: 'Blut',
        ngsProject: 'NGS000012',
        dnaPrepDate: '18.11.2018',
        dnaKonz: '34',
        dnaVisum: 'BMA',
        runNr: '00542',
        ngsNr: '4230498',
        libType: 'next Generation',
        libDate: '20.08.2017',
        libVisum:'BMA',
        seqDate: '20.11.2018',
        ngsMachine: 'NextSeq',
        qualityVisum: 'BMA',
        pubID: '00001',
          },
          {
        bactNr: '100007-18',
        infOldList: '2342342',
        altId: 'ID-001',
        pathogen: 'ecoli',
        patName: 'Donald Truck',
        birthdate: '12.03.1950',
        entry: '13.11.2018',
        abnahme: '14.11.2018',
        sender: 'Spital Basel',
        station: 'Intensiv',
        editing: '16.11.2018',
        material: 'Blut',
        ngsProject: 'NGS000012',
        dnaPrepDate: '18.11.2018',
        dnaKonz: '34',
        dnaVisum: 'BMA',
        runNr: '00542',
        ngsNr: '4230498',
        libType: 'next Generation',
        libDate: '20.08.2017',
        libVisum:'BMA',
        seqDate: '20.11.2018',
        ngsMachine: 'NextSeq',
        qualityVisum: 'BMA',
        pubID: '00001',
          },         
        ]
      },

      editItem (item) {
        this.editedIndex = this.patients.indexOf(item)
        this.editedPatient = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.patients.indexOf(item)
        confirm('Are you sure you want to delete this dataset?') && this.patients.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedPatient = Object.assign({}, this.Patient)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.patients[this.editedIndex], this.editedPatient)
        } else {
          this.patients.push(this.editedPatient)
        }
        this.close()
      }
    }
  }
</script>

<style>
.elevation1{
  height:90%;
  background-color:#424242;
  overflow-y:auto !important;
}

.dataSet{
  max-height: 50px;
  min-width: 130px;
}


</style>