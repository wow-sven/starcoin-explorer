// @ts-ignore
import client from '@/utils/client';
import { getNetwork } from '@/utils/helper';

const network = getNetwork();

export const getBlock = (params: any) => client.get(`block/${network}/hash/${params.hash}`);
export const getBlockList = (params: any) => client.get(`block/${network}/page/${params.page}`);