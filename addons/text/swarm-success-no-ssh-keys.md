You can use Jelastic [SSH Gate](https://docs.jelastic.com/ssh-gate) to establish connection to any node within your account.

### Add a Manager node to the cluster
```
docker swarm join --token \
${globals.manager_token} \
${nodes.cp.master.address}:2377
```

### Add a Worker node to the cluster
```
docker swarm join --token \
${globals.worker_token} \
${nodes.cp.master.address}:2377
```

**Note:** If your Docker Swarm manager nodes are not supplemented with public IPs, you should create the appropriate [endpoint](https://docs.jelastic.com/endpoints) and provide it instead of the last line in the commands above.
