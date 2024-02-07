import { Ref, ref } from "vue";
import Career, { ICareer } from "../../data/models/Career";

export default function useCareer() {
  const careerModel = new Career();
  const careers: Ref<Array<ICareer>> = ref([]);

  const getCareers = async () => {
    try {
      const data = await careerModel.get();
      careers.value = data;
    } catch (error) {}
  };
  return { careers, getCareers };
}
