/* 
 * Copyright � 2016 Andrew "blackyblack" Lekar.
 * 
 * See the AUTHORS.txt and LICENSE.txt files at the top-level directory of
 * this distribution for the individual copyright holder information and the
 * developer policies on copyright and licensing.
 * 
 * Unless otherwise agreed in a custom licensing agreement, no part of the
 * software, including this file, may be copied, modified, propagated,
 * or distributed except according to the terms contained in the LICENSE.txt
 * file.
 * 
 * Removal or modification of this copyright notice is prohibited.
 *
*/

var laundromatContractAbi = [{"constant":true,"inputs":[],"name":"gotParticipants","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_signature","type":"uint256[]"},{"name":"_x0","type":"uint256"},{"name":"_Ix","type":"uint256"},{"name":"_Iy","type":"uint256"}],"name":"withdrawStart","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"pubkeys2","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"payment","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"pubkeys1","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"participants","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"withdrawStep","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"withdrawFinal","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_pubkey1","type":"uint256"},{"name":"_pubkey2","type":"uint256"}],"name":"deposit","outputs":[],"payable":true,"type":"function"},{"inputs":[{"name":"_participants","type":"uint256"},{"name":"_payment","type":"uint256"}],"type":"constructor"},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"message","type":"string"}],"name":"LogDebug","type":"event"}];
var LAUNDROMAT_BYTECODE = '6060604081815260006004819055600581905560065580611138833960a0905251608051600080546c0100000000000000000000000033810204600160a060020a0319918216179091556001805490911673600ad7b57f3e6aeee53acb8704a5ed50b60cacd61790556004829055600581905550506110b6806100826000396000f3606060405236156100775760e060020a600035046307f6472581146100845780631a6c9c0d146100925780631a7fae47146100f557806342f6487a1461011e578063444e8b431461012c5780636c4470fb14610155578063990e1c9b146101635780639ebb1250146101a6578063e2bbb158146101dd575b34610002576101f6610002565b34610002576101f860065481565b3461000257604080516020600480358082013583810280860185019096528085526101f695929460249490939285019282918501908490808284375094965050933593505060443591505060643560045460065460009190101561021e57610002565b34610002576101f860043560088054829081101561000257600091825260209091200154905081565b34610002576101f860055481565b34610002576101f860043560078054829081101561000257600091825260209091200154905081565b34610002576101f860045481565b346100025733600160a060020a0316600090815260026020526040812060068101546101f692908190819081908190819081908190600190101561046057610002565b346100025761020a600160a060020a03331660009081526002602052604081206004546006820154600190910114610d5357610002565b6101f660043560243560045460065410610fc757610002565b005b60408051918252519081900360200190f35b604080519115158252519081900360200190f35b604080518082018252848152602081018490528151600392600092919081908390808381848960046015f150905001915050604051809103902060019004815260200190815260200160002060009054906101000a900460ff161561028257610002565b5033600160a060020a03811660009081526002602081815260408320805473ffffffffffffffffffffffffffffffffffffffff19166c010000000000000000000000009586029590950494909417845560018401869055908301849055865160038401805482825581855293839020909381019289018215610323579160200282015b82811115610323578251826000505591602001919060010190610305565b5061033f9291505b80821115610374576000815560010161032b565b5050600081600401600050818154818355818115116103785760008381526020902061037891810190830161032b565b600191505b5090565b50505050600081600501600050818154818355818115116103aa576000838152602090206103aa91810190830161032b565b505050508060040160005080548060010182818154818355818115116103e1576000838152602090206103e191810190830161032b565b5050506000928352506020909120018490556005810180546001810180835582818380158290116104235760008381526020902061042391810190830161032b565b5050509190906000526020600020900160005060408051878152905190819003602001902090555060016006820155600060078201555050505050565b60045460068a0154111561047357610002565b60408051808201825260018b0154815260028b015460208201528151600392600092919081908390808381848960046015f150905001915050604051809103902060019004815260200190815260200160002060009054906101000a900460ff16156104de57610002565b600160009054906101000a9004600160a060020a0316600160a060020a031663d876fb217f79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f817987f483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b860018d6003016000506004600050548f60070160005054811561000257068154811015610002579060005260206000209001600050546000604051606001526040518560e060020a02815260040180858152602001848152602001838152602001828152602001945050505050606060405180830381600087803b156100025760325a03f1156100025750506040805180516020820151919092015160015460045460068f0154949d50929b50909950600160a060020a0316925063d876fb2191600791908115610002570681548110156100025760009182526020909120015460045460068d0154600891908115610002570681548110156100025790600052602060002090016000505460018d6005016000506004600050548f60070160005054811561000257068154811015610002579060005260206000209001600050546000604051606001526040518560e060020a02815260040180858152602001848152602001838152602001828152602001945050505050606060405180830381600087803b156100025760325a03f1156100025750505060405180519060200180519060200180519060200150809550819650829750505050600160009054906101000a9004600160a060020a0316600160a060020a0316635f8eb4c78989898989896000604051606001526040518760e060020a028152600401808781526020018681526020018581526020018481526020018381526020018281526020019650505050505050606060405180830381600087803b156100025760325a03f11561000257505060408051805160208201519183018051600154600092839052855160e060020a6358da3ca90281526004810185905260248101869052604481018390528651949f50949d50909b50600160a060020a031694506358da3ca993606480850194919392918390030190829087803b156100025760325a03f115610002575050604051805160209091015160015460045460068e0154939650919450600160a060020a03169250631bfa5d8a91600791908115610002570681548110156100025760009182526020909120015460045460068d015460089190811561000257068154811015610002579060005260206000209001600050546000604051604001526040518360e060020a0281526004018083815260200182815260200192505050604060405180830381600087803b156100025760325a03f11561000257505050604051805190602001805190602001508098508199505050600160009054906101000a9004600160a060020a0316600160a060020a031663d876fb21898960018d6003016000506004600050548f60070160005054811561000257068154811015610002579060005260206000209001600050546000604051606001526040518560e060020a02815260040180858152602001848152602001838152602001828152602001945050505050606060405180830381600087803b156100025760325a03f1156100025750505060405180519060200180519060200180519060200150809850819950829a50505050600160009054906101000a9004600160a060020a0316600160a060020a031663d876fb218a600101600050548b6002016000505460018d6005016000506004600050548f60070160005054811561000257068154811015610002579060005260206000209001600050546000604051606001526040518560e060020a02815260040180858152602001848152602001838152602001828152602001945050505050606060405180830381600087803b156100025760325a03f1156100025750505060405180519060200180519060200180519060200150809550819650829750505050600160009054906101000a9004600160a060020a0316600160a060020a0316635f8eb4c78989898989896000604051606001526040518760e060020a028152600401808781526020018681526020018581526020018481526020018381526020018281526020019650505050505050606060405180830381600087803b156100025760325a03f11561000257505060408051805160208201519183018051600154600092839052855160e060020a6358da3ca90281526004810185905260248101869052604481018390528651949f50949d50909b50600160a060020a031694506358da3ca993606480850194919392918390030190829087803b156100025760325a03f115610002575050604051805160209091015160048c01805460018101808355939c50919a509250908281838015829011610bec57600083815260209020610bec91810190830161032b565b5050509190906000526020600020900160006040805160a081810183528e54600160a060020a0316825260208201889052818301879052606082018e9052608082018d905291519091819083908083818460006004601ef15090500191505060405180910390206001900490919091505550886005016000508054806001018281815481835581811511610c9157600083815260209020610c9191810190830161032b565b5050509190906000526020600020900160006040805160a081810183528e54600160a060020a0316825260208201889052818301879052606082018e9052608082018d905291519091819083908083818460006004601ef15090500191505060405180910390206001900460405180828152602001915050604051809103902060019004909190915055508860060160008181505480929190600101919050555088600701600081815054809291906001019190505550505050505050505050565b60408051808201825260018301548152600283015460208201528151600392600092919081908390808381848960046015f150905001915050604051809103902060019004815260200190815260200160002060009054906101000a900460ff1615610dbe57610002565b600481018054600090811015610002576000918252602090912001546004805490830180549091908110156100025760009182526020909120015414610e6757604080516020808252600f908201527f57726f6e67207369676e617475726500000000000000000000000000000000008183015290517fd44da6836c8376d1693e8b9cacf1c39b9bed3599164ad6d8e60902515f83938e9181900360600190a160009150610374565b600581018054600090811015610002576000918252602090912001546004546005830180549091908110156100025760009182526020909120015414610f1057604080516020808252600f908201527f57726f6e67207369676e617475726500000000000000000000000000000000008183015290517fd44da6836c8376d1693e8b9cacf1c39b9bed3599164ad6d8e60902515f83938e9181900360600190a160009150610374565b6006810180546001908101909155604080518082018252828401548152600284015460208201528151600392600092919081908390808381848960046015f150905001915050604051809103902060019004815260200190815260200160002060006101000a81548160ff021916908360f860020a90810204021790555061036f8160000160009054906101000a9004600160a060020a031660056000505460005460ff60a060020a909104161561105157610002565b60078054600181018083558281838015829011610ff557600083815260209020610ff591810190830161032b565b505050600092835250602090912001829055600880546001810180835582818380158290116110355760008381526020902061103591810190830161032b565b5050506000928352506020909120015550600680546001019055565b6000805460a060020a60ff02191660a060020a178155604051600160a060020a038416916161a8918491818181858888f1935050505015156110a2576000805460a060020a60ff0219169055610002565b6000805460a060020a60ff0219169055505056';
var LAUNDROMAT_RUNTIME_BYTECODE = '606060405236156100775760e060020a600035046307f6472581146100845780631a6c9c0d146100925780631a7fae47146100f557806342f6487a1461011e578063444e8b431461012c5780636c4470fb14610155578063990e1c9b146101635780639ebb1250146101a6578063e2bbb158146101dd575b34610002576101f6610002565b34610002576101f860065481565b3461000257604080516020600480358082013583810280860185019096528085526101f695929460249490939285019282918501908490808284375094965050933593505060443591505060643560045460065460009190101561021e57610002565b34610002576101f860043560088054829081101561000257600091825260209091200154905081565b34610002576101f860055481565b34610002576101f860043560078054829081101561000257600091825260209091200154905081565b34610002576101f860045481565b346100025733600160a060020a0316600090815260026020526040812060068101546101f692908190819081908190819081908190600190101561046057610002565b346100025761020a600160a060020a03331660009081526002602052604081206004546006820154600190910114610d5357610002565b6101f660043560243560045460065410610fc757610002565b005b60408051918252519081900360200190f35b604080519115158252519081900360200190f35b604080518082018252848152602081018490528151600392600092919081908390808381848960046015f150905001915050604051809103902060019004815260200190815260200160002060009054906101000a900460ff161561028257610002565b5033600160a060020a03811660009081526002602081815260408320805473ffffffffffffffffffffffffffffffffffffffff19166c010000000000000000000000009586029590950494909417845560018401869055908301849055865160038401805482825581855293839020909381019289018215610323579160200282015b82811115610323578251826000505591602001919060010190610305565b5061033f9291505b80821115610374576000815560010161032b565b5050600081600401600050818154818355818115116103785760008381526020902061037891810190830161032b565b600191505b5090565b50505050600081600501600050818154818355818115116103aa576000838152602090206103aa91810190830161032b565b505050508060040160005080548060010182818154818355818115116103e1576000838152602090206103e191810190830161032b565b5050506000928352506020909120018490556005810180546001810180835582818380158290116104235760008381526020902061042391810190830161032b565b5050509190906000526020600020900160005060408051878152905190819003602001902090555060016006820155600060078201555050505050565b60045460068a0154111561047357610002565b60408051808201825260018b0154815260028b015460208201528151600392600092919081908390808381848960046015f150905001915050604051809103902060019004815260200190815260200160002060009054906101000a900460ff16156104de57610002565b600160009054906101000a9004600160a060020a0316600160a060020a031663d876fb217f79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f817987f483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b860018d6003016000506004600050548f60070160005054811561000257068154811015610002579060005260206000209001600050546000604051606001526040518560e060020a02815260040180858152602001848152602001838152602001828152602001945050505050606060405180830381600087803b156100025760325a03f1156100025750506040805180516020820151919092015160015460045460068f0154949d50929b50909950600160a060020a0316925063d876fb2191600791908115610002570681548110156100025760009182526020909120015460045460068d0154600891908115610002570681548110156100025790600052602060002090016000505460018d6005016000506004600050548f60070160005054811561000257068154811015610002579060005260206000209001600050546000604051606001526040518560e060020a02815260040180858152602001848152602001838152602001828152602001945050505050606060405180830381600087803b156100025760325a03f1156100025750505060405180519060200180519060200180519060200150809550819650829750505050600160009054906101000a9004600160a060020a0316600160a060020a0316635f8eb4c78989898989896000604051606001526040518760e060020a028152600401808781526020018681526020018581526020018481526020018381526020018281526020019650505050505050606060405180830381600087803b156100025760325a03f11561000257505060408051805160208201519183018051600154600092839052855160e060020a6358da3ca90281526004810185905260248101869052604481018390528651949f50949d50909b50600160a060020a031694506358da3ca993606480850194919392918390030190829087803b156100025760325a03f115610002575050604051805160209091015160015460045460068e0154939650919450600160a060020a03169250631bfa5d8a91600791908115610002570681548110156100025760009182526020909120015460045460068d015460089190811561000257068154811015610002579060005260206000209001600050546000604051604001526040518360e060020a0281526004018083815260200182815260200192505050604060405180830381600087803b156100025760325a03f11561000257505050604051805190602001805190602001508098508199505050600160009054906101000a9004600160a060020a0316600160a060020a031663d876fb21898960018d6003016000506004600050548f60070160005054811561000257068154811015610002579060005260206000209001600050546000604051606001526040518560e060020a02815260040180858152602001848152602001838152602001828152602001945050505050606060405180830381600087803b156100025760325a03f1156100025750505060405180519060200180519060200180519060200150809850819950829a50505050600160009054906101000a9004600160a060020a0316600160a060020a031663d876fb218a600101600050548b6002016000505460018d6005016000506004600050548f60070160005054811561000257068154811015610002579060005260206000209001600050546000604051606001526040518560e060020a02815260040180858152602001848152602001838152602001828152602001945050505050606060405180830381600087803b156100025760325a03f1156100025750505060405180519060200180519060200180519060200150809550819650829750505050600160009054906101000a9004600160a060020a0316600160a060020a0316635f8eb4c78989898989896000604051606001526040518760e060020a028152600401808781526020018681526020018581526020018481526020018381526020018281526020019650505050505050606060405180830381600087803b156100025760325a03f11561000257505060408051805160208201519183018051600154600092839052855160e060020a6358da3ca90281526004810185905260248101869052604481018390528651949f50949d50909b50600160a060020a031694506358da3ca993606480850194919392918390030190829087803b156100025760325a03f115610002575050604051805160209091015160048c01805460018101808355939c50919a509250908281838015829011610bec57600083815260209020610bec91810190830161032b565b5050509190906000526020600020900160006040805160a081810183528e54600160a060020a0316825260208201889052818301879052606082018e9052608082018d905291519091819083908083818460006004601ef15090500191505060405180910390206001900490919091505550886005016000508054806001018281815481835581811511610c9157600083815260209020610c9191810190830161032b565b5050509190906000526020600020900160006040805160a081810183528e54600160a060020a0316825260208201889052818301879052606082018e9052608082018d905291519091819083908083818460006004601ef15090500191505060405180910390206001900460405180828152602001915050604051809103902060019004909190915055508860060160008181505480929190600101919050555088600701600081815054809291906001019190505550505050505050505050565b60408051808201825260018301548152600283015460208201528151600392600092919081908390808381848960046015f150905001915050604051809103902060019004815260200190815260200160002060009054906101000a900460ff1615610dbe57610002565b600481018054600090811015610002576000918252602090912001546004805490830180549091908110156100025760009182526020909120015414610e6757604080516020808252600f908201527f57726f6e67207369676e617475726500000000000000000000000000000000008183015290517fd44da6836c8376d1693e8b9cacf1c39b9bed3599164ad6d8e60902515f83938e9181900360600190a160009150610374565b600581018054600090811015610002576000918252602090912001546004546005830180549091908110156100025760009182526020909120015414610f1057604080516020808252600f908201527f57726f6e67207369676e617475726500000000000000000000000000000000008183015290517fd44da6836c8376d1693e8b9cacf1c39b9bed3599164ad6d8e60902515f83938e9181900360600190a160009150610374565b6006810180546001908101909155604080518082018252828401548152600284015460208201528151600392600092919081908390808381848960046015f150905001915050604051809103902060019004815260200190815260200160002060006101000a81548160ff021916908360f860020a90810204021790555061036f8160000160009054906101000a9004600160a060020a031660056000505460005460ff60a060020a909104161561105157610002565b60078054600181018083558281838015829011610ff557600083815260209020610ff591810190830161032b565b505050600092835250602090912001829055600880546001810180835582818380158290116110355760008381526020902061103591810190830161032b565b5050506000928352506020909120015550600680546001019055565b6000805460a060020a60ff02191660a060020a178155604051600160a060020a038416916161a8918491818181858888f1935050505015156110a2576000805460a060020a60ff0219169055610002565b6000805460a060020a60ff0219169055505056';

function oneTimeCallback(state, message, callback) {

  if(state.synced) return;

  if(state.processed >= state.total) {

    state.synced = true;
    callback(message);
    return;
  }
}

function getStatus(address, callback) {

  try
  {
    web3.eth.getCode(address, function(err, code) {

      if(err) {

        callback({result: 'error', error: err});
        return;
      }
      
      if(!code || code.length == 0) {
        callback({result: 'error', error: 'Cannot validate contract code'});
        return;
      }

      var contractVersion = 0;
      if(code.endsWith(LAUNDROMAT_RUNTIME_BYTECODE)) {
        contractVersion = 1;
      }

      if(contractVersion != 1) {
        callback({result: 'error', error: 'Invalid contract code'});
        return;
      }

      var laundromatContract = web3.eth.contract(laundromatContractAbi);
      var laundromatContractInstance = laundromatContract.at(address);

      laundromatContractInstance.gotParticipants(function(err2, gotParticipants) {
      
        if(err2) {

          callback({result: 'error', error: err2});
          return;
        }

        var gotParticipantsValue = parseInt(gotParticipants.toFixed());
        var state = {synced: false, total: gotParticipantsValue * 2 + 3, processed: 1, skipped: 0};
        state.gotParticipants = gotParticipantsValue;
        state.pubkeys = [];

        laundromatContractInstance.participants(function(err3, participants) {
      
          if(err3) {

            state.skipped++;
            state.processed++;
            oneTimeCallback(state, { result: 'error', error: err3 }, callback);
            return;
          }

          var participantsValue = parseInt(participants.toFixed());
          state.processed++;
          state.participants = participantsValue;
          oneTimeCallback(state, { result: 'ok',
            participants: state.participants, gotParticipants: state.gotParticipants,
            payment: state.payment, address: address, pubkeys: state.pubkeys}, callback);
          return;
        });

        laundromatContractInstance.payment(function(err3, payment) {
      
          if(err3) {

            state.skipped++;
            state.processed++;
            oneTimeCallback(state, { result: 'error', error: err3 }, callback);
            return;
          }

          var paymentValue = payment.toFixed();
          state.processed++;
          state.payment = paymentValue;
          oneTimeCallback(state, { result: 'ok',
            participants: state.participants, gotParticipants: state.gotParticipants,
            payment: state.payment, address: address, pubkeys: state.pubkeys}, callback);
          return;
        });

        for(var i = 0; i < state.gotParticipants; i++) {

          (function(i) {

            laundromatContractInstance.pubkeys1(i, function(err3, pubkey1) {
        
              if(err3) {

                state.skipped++;
                state.processed++;
                oneTimeCallback(state, { result: 'error', error: err3 }, callback);
                return;
              }

              var pubkey1Value = pubkey1.toFixed();
              state.processed++;
              var pubkey = state.pubkeys[i];
              if(typeof pubkey === 'undefined') {

                pubkey = [];
              }

              pubkey[0] = pubkey1Value;
              state.pubkeys[i] = pubkey;

              oneTimeCallback(state, { result: 'ok',
                participants: state.participants, gotParticipants: state.gotParticipants,
                payment: state.payment, address: address, pubkeys: state.pubkeys}, callback);
              return;
            });

            laundromatContractInstance.pubkeys2(i, function(err3, pubkey2) {
        
              if(err3) {

                state.skipped++;
                state.processed++;
                oneTimeCallback(state, { result: 'error', error: err3 }, callback);
                return;
              }

              var pubkey2Value = pubkey2.toFixed();
              state.processed++;
              var pubkey = state.pubkeys[i];
              if(typeof pubkey === 'undefined') {

                pubkey = [];
              }

              pubkey[1] = pubkey2Value;
              state.pubkeys[i] = pubkey;

              oneTimeCallback(state, { result: 'ok',
                participants: state.participants, gotParticipants: state.gotParticipants,
                payment: state.payment, address: address, pubkeys: state.pubkeys}, callback);
              return;
            });
          }) (i);
        }

        oneTimeCallback(state, { result: 'ok',
          participants: state.participants, gotParticipants: state.gotParticipants,
          payment: state.payment, address: address, pubkeys: state.pubkeys}, callback);
        return;
      });
    });
  }
  catch (err) {
    console.log("error: " + err.message);
    callback({result: 'error', error: err.message});
    return;
  }
}

function create(myaddress, participants, payment, callback) {

  var laundromatContract = web3.eth.contract(laundromatContractAbi);

  try {
    var laundromat = laundromatContract.new(
      participants,
      payment,
      {
        from: myaddress, 
        data: LAUNDROMAT_BYTECODE, 
        gas: 1700000
      }, function (e, contract){
        console.log(e, contract);

        if(e) {
          callback({result: 'error', error: e.message});
          return;
        }

        if (typeof contract.address !== 'undefined') {
          console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
          callback({result: 'ok', address: contract.address});
          return;
        }

        //callback({result: 'error', error: 'Contract address not ready'});
        return;
      }
    );
  } catch (err) {
    console.log("error: " + err.message);
    callback({result: 'error', error: err.message});
    return;
  }
}

function deposit(address, myaddress, privateKey, callback) {

  getStatus(address, function(result) {

    if(result.result != 'ok') {

      callback(result);
      return;
    }

    var paymentWei = result.payment;
    var pubkeys = result.pubkeys;
    var gotParticipants = result.gotParticipants;
    var participants = result.participants;

    if(gotParticipants >= participants) {

      callback({result: 'error', error: 'No more participants available'});
      return;
    }

    var pubkey = getPublicKey(privateKey);

    //start deposit
    var laundromatContract = web3.eth.contract(laundromatContractAbi);
    var laundromatContractInstance = laundromatContract.at(address);

    try {

      laundromatContractInstance.deposit(pubkey[0], pubkey[1],
        {from: myaddress, gas: 200000, value: paymentWei},
        function(err, txhash) {

          if(err) {

            callback({result: 'error', error: err});
            return;
          }

          callback({result: 'ok', txhash: txhash});
          return;
        }
      );
    } catch (err) {

      console.log("error: " + err.message);
      callback({result: 'error', error: err.message});
      return;
    }
  });
}

function withdraw(address, myaddress, privateKey, callback) {

  getStatus(address, function(result) {

    if(result.result != 'ok') {

      callback(result);
      return;
    }

    var paymentWei = result.payment;
    var pubkeys = result.pubkeys;
    var gotParticipants = result.gotParticipants;
    var participants = result.participants;

    if(gotParticipants < participants) {

      callback({result: 'error', error: ('Not enough participants: ' + gotParticipants + ' of ' + participants)});
      return;
    }

    //make signature
    var result = signring(privateKey, myaddress, pubkeys);
    if(result.result != 'ok') {

      callback(result);
      return;
    }

    console.log('Signature: ' + result.signature.toString());
    console.log('x0: ' + result.x0.toString());
    console.log('I: ' + [result.ix, result.iy].toString());

    //start withdraw
    var laundromatContract = web3.eth.contract(laundromatContractAbi);
    var laundromatContractInstance = laundromatContract.at(address);

    try {

      laundromatContractInstance.withdrawStart(result.signature, result.x0, result.ix, result.iy,
        {from: myaddress, gas: 1500000}, function(err, txhash) {

          if(err) {

            callback({result: 'error', error: err});
            return;
          }

          console.log('Withdraw started');

          var state = {synced: false, total: participants, processed: 0, skipped: 0};
          state.participants = participants;
          
          withdrawStepAll(address, myaddress, state, function(err2, newstate) {

            if(err2) {

              callback({result: 'error', error: err2});
              return;
            }

            laundromatContractInstance.withdrawFinal({from: myaddress, gas: 1700000}, function(err3, txhash) {

              if(err3) {

                callback({result: 'error', error: err3});
                return;
              }

              callback({result: 'ok', txhash: txhash});
              return;
            });
          });
        }
      );
    } catch (err) {

      console.log("error: " + err.message);
      callback({result: 'error', error: err.message});
      return;
    }
  });
}

function withdrawStep(address, myaddress, callback) {

  //start withdraw
  var laundromatContract = web3.eth.contract(laundromatContractAbi);
  var laundromatContractInstance = laundromatContract.at(address);

  try {

    laundromatContractInstance.withdrawStep({from: myaddress, gas: 1500000}, function(err, txhash) {

      if(err) {

        callback({result: 'error', error: err});
        return;
      }

      console.log("Withdraw step");
      callback({result: 'ok', txhash: txhash});
      return;
    });
  } catch (err) {

    console.log("error: " + err.message);
    callback({result: 'error', error: err.message});
    return;
  }
}

function withdrawStepAll(address, myaddress, state, callback) {

  //start withdraw
  var laundromatContract = web3.eth.contract(laundromatContractAbi);
  var laundromatContractInstance = laundromatContract.at(address);

  state.txhashes = [];
  try {

    for(var i = 0; i < state.participants; i++) {

      (function(i) {

        laundromatContractInstance.withdrawStep({from: myaddress, gas: 1700000}, function(err, txhash) {

          if(err) {

            state.skipped++;
            state.processed++;
            oneTimeCallback(state, { result: 'error', error: err }, callback);
            return;
          }

          console.log("Withdraw step " + i);
          state.processed++;
          state.txhashes.push(txhash);

          oneTimeCallback(state, { result: 'ok', state: state}, callback);
          return;
        });
      }) (i);
    }

    oneTimeCallback(state, { result: 'ok', state: state}, callback);
    return;
  } catch (err) {

    console.log("error: " + err.message);
    callback({result: 'error', error: err.message});
    return;
  }
}

function withdrawFinal(address, myaddress, callback) {

  //start withdraw
  var laundromatContract = web3.eth.contract(laundromatContractAbi);
  var laundromatContractInstance = laundromatContract.at(address);

  try {

    laundromatContractInstance.withdrawFinal({from: myaddress, gas: 1500000}, function(err, txhash) {

      if(err) {

        callback({result: 'error', error: err});
        return;
      }

      console.log("Withdraw final");
      callback({result: 'ok', txhash: txhash});
      return;
    });
  } catch (err) {

    console.log("error: " + err.message);
    callback({result: 'error', error: err.message});
    return;
  }
}