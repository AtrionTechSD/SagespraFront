import { Ref, ref } from "vue";
import Company, { ICompany } from "../../data/models/Company";

export default function useCompany() {
  const companyModel = new Company();
  const companies: Ref<Array<ICompany>> = ref([]);

  const getCompanies = async () => {
    try {
      companyModel.include = ["projects", "infos"];
      const data = await companyModel.get();
      companies.value = data;
    } catch (error) {}
  };
  return { companies, getCompanies };
}
