var refuseData = [
  {
    'date': '06/30/2018',
    'fee': '$150'
  },
  {
    'date': '12/31/2018',
    'fee': '$150'
  }
]

export default {
  key: 'refuse',
  icon: 'trash-alt',
  label: 'Refuse Collection Fee',
  components: [
    {
      type: 'callout',
      slots: {
        text: "\
          <h4>Overview</h4>\
          The Solid Resources Fee of three hundred dollars ($300.00) will be imposed annually on \
          any commercial establishment or multi-unit property receiving city collection of rubbish and \
          recycling materials. The City of Philadelphia currently collects solid waste from eligible small \
          commercial establishments and multi-unit properties. Owners of these premises may elect to \
          continue receiving the city's services for the annual fee or obtain collection services from \
          a private hauler.\
        ",
      }
    },
    {
      type: 'horizontal-table',
      options: {
        id: 'refuseFees',
        fields: [
          {
            label: 'Date',
            value: function(state, item){
              return item.date;
            },
            nullValue: 'date not available'
          },
          {
            label: 'Fee',
            value: function(state, item){
              return item.fee;
            },
            nullValue: 'not available'
          }
        ]
      },
      slots: {
        title: 'Refuse Fees Owed',
        items: refuseData
      }
    },
    {
      type: 'refuseFeeCallout',
    },
    {
      type: 'callout',
      slots: {
        text: "\
          <h4>Eligibility</h4>\
          Eligibility for the City's commercial collection services and the fee will remain as follows:\
          <ul>\
          <li>Any private premises eligible under Section Seven of Regulations Governing Municipal Collection of Refuse shall be eligible for this service fee.</li>\
          <li>Premises must have equal to or less than 6 units, and not exceed the set out limits.</li>\
          <li>Weekly set out limit for non-recyclable rubbish can not exceed six 32-gallon receptacles or twelve plastic bags, or an equivalent combination of the two. There is no limit on recyclables.</li>\
          <li>Vacant premises are not eligible for city collection or the service fee.</li>\
          <li>Multi-unit premises occupied by the owner, and not rented will be exempt from the fee.</li>\
          </ul>\
        ",
      }
    },
    {
      type: 'refuseExemptionCallout',
    },
    {
      type: 'callout',
      slots: {
        text: "\
          <h4>You can also contact</h4>\
          <b>Department of Revenue</b><br>\
          <b>Solid Resources Unit</b><br>\
          215-686-5090<br>\
          <a href='mailto:solidresources@phila.gov'>solidresources@phila.gov</a>\
        ",
      }
    },
    {
      type: 'refuseQuestionsCallout',
    },
  ],
}
