import { CategoryType } from '@/(main)/_components/type';

interface Data {
  id: number;
  text: CategoryType;
}

type Dummy = Data[];

const categoryDummy: Dummy = [
  { id: 0, text: '전체' },
  { id: 1, text: '문화 · 예술' },
  { id: 2, text: '식음료' },
  { id: 3, text: '스포츠' },
  { id: 4, text: '투어' },
  { id: 5, text: '관광' },
  { id: 6, text: '웰빙' },
];

export default categoryDummy;
