import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xE90323fe246996c000F7700CA586D7ae36B1E52C'
);

export default instance;
