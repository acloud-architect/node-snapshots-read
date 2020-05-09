var AWS = require('aws-sdk');
var readlinesync = require('readline-sync');

var accountId = readlinesync.question('Enter the AWS account id: ');

AWS.config.update({region: 'ap-southeast-2'});
var ec2 = new AWS.EC2();


var param = {
    DryRun: false,
    OwnerIds: [
        accountId
    ]
}

ec2.describeSnapshots(param, (err, data)=>{
    if(err){
        console.log('Error', err.stack)
    }else{
        var i = 1;
        data.Snapshots.forEach((item, index, arr)=>{
            console.log(i, item.SnapshotId, item.Tags)
            i++;
        })
    }
})

