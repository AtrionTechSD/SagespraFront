import { Ref, ref } from "vue";
import Campus, { ICampus } from "../../data/models/Campus";

export default function useCampus() {
  const campusModel = new Campus();
  const campus: Ref<Array<ICampus>> = ref([]);

  const getCampus = async () => {
    try {
      const data = await campusModel.get();
      campus.value = data;
    } catch (error) {}
  };
  return { campus, getCampus };
}
