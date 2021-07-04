// Mock data
import GetAllWhitelist from 'data/app/pinang/whitelist/all-whitelist-data';

function lookupWhitelist(allWhitelist) {
  const WhitelistData = JSON.parse(JSON.stringify(allWhitelist));
  console.log(WhitelistData);
  
  return WhitelistData;
}

export const getAllWhitelists = (limit = 25) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const whitelistLookup = GetAllWhitelist.slice(0, limit).map(lookupWhitelist);

      resolve({
        whitelists: whitelistLookup,
        whitelistTotal: GetAllWhitelist.length
      });
    }, 700);
  });
};

export const getAllWhitelist = nomorRekeningPayroll => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const allWhitelist = GetAllWhitelist.find(allWhitelist => allWhitelist.nomorRekeningPayroll === nomorRekeningPayroll);

      if (allWhitelist) {
        resolve({
          whitelist: lookupWhitelist(allWhitelist)
        });
      } else {
        reject({
          error: 'User not found'
        });
      }
    }, 500);
  });
};
