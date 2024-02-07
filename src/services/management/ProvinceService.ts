import { Ref, ref } from "vue";
import Province, { IProvince } from "../../data/models/Province";

export default function useProvince() {
  const provinceModel = new Province();
  const provinces: Ref<Array<IProvince>> = ref([]);

  const getProvinces = async () => {
    try {
      provinceModel.include = ["municipes"];
      const data = await provinceModel.get();
      provinces.value = data;
    } catch (error) {}
  };
  return { provinces, getProvinces };
}
