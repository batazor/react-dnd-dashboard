const API = {
  setting: {
    array: false,
    title: 'setting',
    description: 'main_setting',
    list: [
      [
        {
          name: 'title',
          type: 'String',
          defaultValue: 'New LineChart',
          placeholder: 'title',
        },
        {
          name: 'limitPoints',
          type: 'String',
          typeInput: 'number',
          defaultValue: 1000,
          placeholder: 'limit_points',
        },
        {
          name: 'syncId',
          type: 'String',
          defaultValue: '',
          placeholder: 'sync_widget',
        },
      ],
    ],
  },
  line: {
    array: true,
    title: 'Line',
    description: 'setting',
    list: [
      [
        {
          name: 'label',
          type: 'String',
          placeholder: 'label',
          defaultValue: 'X',
        },
        {
          name: 'DataSource',
          type: 'VirtualSelect',
          placeholder: 'data_source',
          value: [],
        },
        {
          name: 'Field',
          type: 'VirtualSelect',
          placeholder: 'field',
          value: [],
        },
        {
          name: 'joinBy',
          type: 'VirtualSelect',
          placeholder: 'joinBy',
          value: [],
        },
        {
          name: 'color',
          type: 'Color',
          defaultValue: '#8884d8',
          placeholder: 'color',
          fullWidth: true,
        },
        {
          name: 'dot',
          type: 'Toggle',
          defaultValue: false,
          placeholder: 'disable_dot',
        },
        {
          name: 'connectNulls',
          type: 'Toggle',
          defaultValue: false,
          placeholder: 'connectNulls',
        },
        {
          name: 'condition',
          type: '',
          placeholder: 'condition',
          value: [],
        },
      ],
    ],
    condition: [],
  },
  XAxis: {
    array: false,
    title: 'XAxis',
    description: 'setting',
    list: [
      [
        {
          name: 'type',
          type: 'VirtualSelect',
          placeholder: 'binding',
          options: [
            { name: 'category', value: 'category' },
            { name: 'number', value: 'number' },
          ],
        },
        {
          name: 'unit',
          type: 'String',
          placeholder: 'Unit',
        },
      ],
    ],
  },
  YAxis: {
    array: false,
    title: 'YAxis',
    description: 'setting',
    list: [
      [
        {
          name: 'binding',
          type: 'VirtualSelect',
          from: 'line',
          placeholder: 'binding',
          value: [],
        },
        {
          name: 'unit',
          type: 'String',
          placeholder: 'Unit',
        },
      ],
    ],
  },
  CartesianGrid: {
    array: false,
    title: 'cartesian',
    description: 'setting',
    list: [
      [
        {
          name: 'enable',
          type: 'Toggle',
          defaultValue: true,
          placeholder: 'enable',
        },
        {
          name: 'CartesianGridColor',
          type: 'Color',
          defaultValue: '#8884d8',
          placeholder: 'color',
          fullWidth: true,
        },
      ],
    ],
  },
  tooltip: {
    array: false,
    title: 'tooltip',
    description: 'setting',
    list: [
      [
        {
          name: 'enable',
          type: 'Toggle',
          defaultValue: true,
          placeholder: 'enable',
        },
      ],
    ],
  },
  legend: {
    array: false,
    title: 'legend',
    description: 'setting',
    list: [
      [
        {
          name: 'enable',
          type: 'Toggle',
          defaultValue: false,
          placeholder: 'enable',
        },
      ],
    ],
  },
  brush: {
    array: false,
    title: 'brush',
    description: 'setting',
    list: [
      [
        {
          name: 'enable',
          type: 'Toggle',
          defaultValue: false,
          placeholder: 'enable',
        },
        {
          name: 'type',
          type: 'VirtualSelect',
          placeholder: 'binding',
          options: [
            { name: 'time', value: 'time' },
            { name: 'packet', value: 'packet' },
          ],
        },
        {
          name: 'color',
          type: 'Color',
          defaultValue: '#8884d8',
          placeholder: 'color',
          fullWidth: true,
        },
      ],
    ],
  },
}

export default {
  title: 'LineChart',
  icon: 'lineChart',
  new: {
    type: 'LineChart',
    layout: {
      w: 6, h: 2, x: 0, y: 0,
    },
    api: API,
  },
  api: API,
}
