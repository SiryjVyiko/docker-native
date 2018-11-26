import com.hivext.api.core.utils.Transport;
import com.hivext.api.development.Scripting;
import com.hivext.api.utils.Random;

var extIpEnabled = jelastic.billing.account.GetQuotas(appid, session, 'environment.externalip.enabled');

if (extIpEnabled.result != 0) return resp;

var extIpMaximum = jelastic.billing.account.GetQuotas(appid, session, 'environment.externalip.maxcount');

if (extIpMaximum.result != 0) return resp;

var extIpMaximumPerNode = jelastic.billing.account.GetQuotas(appid, session, 'environment.externalip.maxcount.per.node');

if (extIpMaximumPerNode.result != 0) return resp;

if (extIpEnabled.array[0].value != 0 && extIpMaximum.array[0].value > 0 && extIpMaximumPerNode.array[0].value > 0) return jelastic.environment.control.AttachExtIp({
    envName: "${env.envName}",
    nodeId: ${nodes.cp.master.id}
});

return { result: 0 };
