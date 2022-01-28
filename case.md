# PureSOL Frontend Test Case 2 | Custom Fields

**Gelen Veriye göre Tamamen dinamik olarak değişebilen bir form elementi componenti oluşturmanız ve bu Componentler ile oluşan bir Form üzerinden CRUD işlemi yapmanız istenmektedir**

Aşağıda bulunan Array içerisindeki Objelerin her biri kullanıcıya **farklı** bir field çıkartmaktadır. Sizden bu task içerisinde istediğimiz tamı tamına aşağıdaki bilgilere göre bir component oluşturmanız.

Component oluşturulduktan sonra basit bir **Blog POST uygulaması yapmanızı bekliyoruz**

**Önemli Noktalar**

- Bu oluşturacağınız component herhangi bir form elementi gibi **v-model** ile kullanılabilmelidir.
- Field'ların bilgilerine göre kayıt işlemi sırasında **validation** kontrolü yapabilmelidir.
- Bu fieldların Kayıt veya Update edilirken **cf_custom_field_id** şeklinde olmalıdır yani
  - **cf_1234345454** gibi.

**Örnek Olması Adına Kullanıcı Veriniz Şu Şekilde Olabilir**

```
userData : {
    cf_6099a2aea0d0960004268fd8 : null,
    cf_6099a48aa0d09600042696d1 : null,
    cf_6099a511a0d0960004269ab6 : null,
    cf_6099a52ca0d0960004269ca7 : null,
    cf_6099a538a0d0960004269e98 : null,
}
```

Kullanıcı bu fieldlar ile oluşturmuş olduğunuz formu doldurduğunda/düzenlediğinde Backend'e bu bilgileri yukarıdaki formatta göndermeniz gerekmektedir.

Update sayfasında ise Backend üzerinden size bu response aşağıdaki şekilde gelebilir. Yani Kayıt ederken `cf_{id}` syntax'ı ile kayıt ettiğimiz için Update ile bu bilgileri çekerken doğal olarak aynı formatta çekiyoruz.

```
data : {
    cf_6099a2aea0d0960004268fd8 : "Deneme Başlığı",
    cf_6099a48aa0d09600042696d1 : "6099a48aa0d09600042696cf"
    cf_6099a511a0d0960004269ab6 : true,
    cf_6099a52ca0d0960004269ca7 : "2021-05-10T17:27:08.543-04:00",
    cf_6099a538a0d0960004269e98 : "Bu bir case açıklamasıdır...",
}
```

**Önemli Not** : Fakat dikkat etmemiz gereken nokta ise update sayfasında bu form oluşturulduğunda Backend üzerinden gelen datalar bu fieldlar üzerinde gözükmelidir.

**Önemli Not** : Bu fieldlar dinemik olarak eklenildiği için tamamen değişebilir üzerine eklenilebilir ya da silinebilir.

**Diğer Önemli Noktalar**

- Validation için Vuelidate gibi bir yapı kullanmanız ve bu custom field yapısına göre validation türü de dinamik olarak eklenebilir olmalıdır.
- Eğer **input_type == "textbox"** ise **input_validator** üzerinden validation türü eklenebilir. (Integer, text, Decimal)
- Backend işlemi için **JsonServer** ile Fake bir API üretebilirsiniz
  - https://github.com/typicode/json-server

Seni aramızda görmeyi çok istiyoruz
Başarılar :)

```
[
  {
    active: true,
    calculator_result_measurement_type: null,
    calculator_result_type: null,
    calculator_round: null,
    calculator_round_decimals: 2,
    checkbox_style: "",
    compare_to: null,
    compare_to_info: null,
    compare_to_type: null,
    created_at: "2021-05-10T17: 16: 30.974-04: 00",
    created_by_id: "5da37780ed9f271eb4d52a59",
    created_by_type: "User",
    css_style: "6",
    default_value: "My New Title",
    description: "Post Title Here..",
   
    input_type: "textbox",
    input_validator: "none",
   
    is_required: true,
    name: "Title",
    order: 0,
    place_holder: "My title",
    slug: "",
    smart_ddl_type: "",
    smart_ddl_value_type: "",
   
    updated_at: "2021-05-10T17: 22: 14.828-04: 00",
    updated_by_id: "5da37780ed9f271eb4d52a59",
    updated_by_type: "User",
    id: "6099a2aea0d0960004268fd8",
    type_id: "",
  },
  {
    active: true,
    calculator_result_measurement_type: null,
    calculator_result_type: null,
    calculator_round: null,
    calculator_round_decimals: 2,
    checkbox_style: "",
    compare_to: null,
    compare_to_info: null,
    compare_to_type: null,
    created_at: "2021-05-10T17: 24: 26.801-04: 00",
    created_by_id: "5da37780ed9f271eb4d52a59",
    created_by_type: "User",
    css_style: "6",
    default_value: "default_value",
    description: "Post Category",
    display_options: {
      hide_at_display: false,
      label: "",
      show_label: false,
      id: "6099a48aa0d09600042696d5",
    },
    input_type: "smart_ddl",
    input_validator: "",
    is_list_item: false,
    is_required: true,
    name: "Category",
    order: 0,
    place_holder: "Pick a Category",
    slug: "",
    smart_ddl_items: [
      {
        name: "Category 1",
        styler: { disable: false, hide: false, id: "6099a48aa0d09600042696d2" },
        value: "category_1",
        id: "6099a48aa0d09600042696ce",
      },
      {
        name: "Category 2",
        styler: { disable: false, hide: false, id: "6099a48aa0d09600042696d3" },
        value: "category_2",
        id: "6099a48aa0d09600042696cf",
      },
      {
        name: "Category 3",
        styler: { disable: false, hide: false, id: "6099a48aa0d09600042696d4" },
        value: "category_3",
        id: "6099a48aa0d09600042696d0",
      },
    ],
    smart_ddl_type: "dropdownlist",
    smart_ddl_value_type: "text",
    styler: { disable: false, hide: false, id: "6099a48aa0d09600042696d6" },
    type_ids: ["6099a27da0d0960004268ef3"],
    type_inventory_product: "",
    updated_at: "2021-05-10T17: 40: 34.511-04: 00",
    updated_by_id: "5da37780ed9f271eb4d52a59",
    updated_by_type: "User",
    id: "6099a48aa0d09600042696d1",
    type_id: "",
  },
  {
    active: true,
    calculator_result_measurement_type: null,
    calculator_result_type: null,
    calculator_round: null,
    calculator_round_decimals: 2,
    checkbox_style: "checkbox",
    compare_to: null,
    compare_to_info: null,
    compare_to_type: null,
    created_at: "2021-05-10T17: 26: 41.180-04: 00",
    created_by_id: "5da37780ed9f271eb4d52a59",
    created_by_type: "User",
    css_style: "6",
    default_value: "",
    description: "Allow Comments",
    display_options: {
      hide_at_display: false,
      label: "",
      show_label: false,
      id: "6099a511a0d0960004269ab7",
    },
    input_type: "checkbox",
    input_validator: "",
    is_list_item: false,
    is_required: false,
    name: "Allow Comments",
    order: 0,
    place_holder: "Allow Comments",
    slug: "",
    smart_ddl_type: "",
    smart_ddl_value_type: "",
    styler: { disable: false, hide: false, id: "6099a511a0d0960004269ab8" },
    type_ids: ["6099a27da0d0960004268ef3"],
    type_inventory_product: "",
    updated_at: "2021-05-10T17: 26: 41.180-04: 00",
    updated_by_id: null,
    updated_by_type: null,
    id: "6099a511a0d0960004269ab6",
    type_id: "",
  },
  {
    active: true,
    calculator_result_measurement_type: null,
    calculator_result_type: null,
    calculator_round: null,
    calculator_round_decimals: 2,
    checkbox_style: "",
    compare_to: null,
    compare_to_info: null,
    compare_to_type: null,
    created_at: "2021-05-10T17: 27: 08.543-04: 00",
    created_by_id: "5da37780ed9f271eb4d52a59",
    created_by_type: "User",
    css_style: "6",
    default_value: "default_value",
    description: "Created Date",
    display_options: {
      hide_at_display: false,
      label: "",
      show_label: false,
      id: "6099a52ca0d0960004269ca8",
    },
    input_type: "calendar",
    input_validator: "",
    is_list_item: false,
    is_required: true,
    name: "Created Date",
    order: 0,
    place_holder: "Created Date",
    slug: "",
    smart_ddl_type: "",
    smart_ddl_value_type: "",
    styler: { disable: false, hide: false, id: "6099a52ca0d0960004269ca9" },
    type_ids: ["6099a27da0d0960004268ef3"],
    type_inventory_product: "",
    updated_at: "2021-05-10T17: 27: 08.543-04: 00",
    updated_by_id: null,
    updated_by_type: null,
    id: "6099a52ca0d0960004269ca7",
    type_id: "",
  },
  {
    active: true,
    calculator_result_measurement_type: null,
    calculator_result_type: null,
    calculator_round: null,
    calculator_round_decimals: 2,
    checkbox_style: "",
    compare_to: null,
    compare_to_info: null,
    compare_to_type: null,
    created_at: "2021-05-10T17: 27: 20.835-04: 00",
    created_by_id: "5da37780ed9f271eb4d52a59",
    created_by_type: "User",
    css_style: "12",
    default_value: "",
    description: "Details",
    display_options: {
      hide_at_display: false,
      label: "",
      show_label: false,
      id: "6099a538a0d0960004269e99",
    },
    input_type: "text",
    input_validator: "",
    is_list_item: false,
    is_required: false,
    name: "Details",
    order: 0,
    place_holder: "Details",
    slug: "",
    smart_ddl_type: "",
    smart_ddl_value_type: "",
    styler: { disable: false, hide: false, id: "6099a538a0d0960004269e9a" },
    type_ids: ["6099a27da0d0960004268ef3"],
    type_inventory_product: "",
    updated_at: "2021-05-10T17: 40: 42.085-04: 00",
    updated_by_id: "5da37780ed9f271eb4d52a59",
    updated_by_type: "User",
    id: "6099a538a0d0960004269e98",
    type_id: "",
  },
];