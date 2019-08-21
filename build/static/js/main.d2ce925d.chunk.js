(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,a,t){e.exports=t(64)},40:function(e,a,t){},41:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},42:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(31),o=t.n(s),c=(t(40),t(41),t(42),t(15)),i=t(12),l=t(1),m=t(2),p=t(6),f=t(4),u=t(5),d=t(3),h=t(32),k=t.n(h),v=function(){function e(){Object(l.a)(this,e)}return Object(m.a)(e,null,[{key:"getEventEmitter",value:function(){return this.eventEmitter}}]),e}();v.eventEmitter=new k.a.EventEmitter;var _=v,g=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(p.a)(this,Object(f.a)(a).call(this,e))).state={model:"",delegate:"",showView:!0},t.routeToModel=t.routeToModel.bind(Object(d.a)(t)),t.overlayClass={position:"fixed",width:"100%",height:"100%",top:"0",left:"0",right:"0",bottom:"0",backgroundColor:"rgba(0,0,0,0.5)",zIndex:"2"},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentWillMount",value:function(){this.setState({model:this.props.model},function(){})}},{key:"routeToModel",value:function(e){this.closeModal();var a="/models/"+e;this.props.history.push(a)}},{key:"closeModal",value:function(){this.props.removeModal(),_.getEventEmitter().emit("closeNav")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:this.overlayClass,onClick:function(){return e.closeModal()}},r.a.createElement("div",{className:"container-fluid h-100"},r.a.createElement("div",{className:"d-flex h-100 justify-content-end align-items-middle"},r.a.createElement("div",{className:"card h-100 d-flex w-auto bg-light"},r.a.createElement("div",{className:"card-header d-flex"},this.state.model.model_name," - ",this.state.model.model_id),r.a.createElement("div",{className:"card-body p-2"},r.a.createElement("div",{className:"d-flex p-2 bg-gray h-100"},r.a.createElement("code",{style:{"white-space":"pre-line"}},this.state.model.generated_code.DEV))),r.a.createElement("div",{className:"card-footer d-flex justify-content-between"},r.a.createElement("button",{className:"btn btn-success m-2",onClick:function(){return e.routeToModel(e.state.model.model_id)}},"Edit Configuration"),r.a.createElement("button",{className:"btn btn-warning m-2"},"Generate Code"))))))}}]),a}(n.Component),b=Object(i.g)(g),E=function(e){function a(e){var t;return Object(l.a)(this,a),t=Object(p.a)(this,Object(f.a)(a).call(this,e)),_.getEventEmitter().on("closeNav",function(){t.setState({sidebarActive:!1})}),t.state={sidebarActive:!1},t.removeModal=t.removeModal.bind(Object(d.a)(t)),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"removeModal",value:function(){var e=this;console.log("updated"),this.setState({sidebarActive:!1},function(){console.log(e.state.sidebarActive)})}},{key:"render",value:function(){var e=this;return r.a.createElement("tr",{onClick:function(){e.setState({sidebarActive:!0})}},r.a.createElement("td",null,this.props.model.model_id),r.a.createElement("td",null,this.props.model.model_name),r.a.createElement("td",null,this.props.model.product_name),r.a.createElement("td",null,this.props.model.model_owner),r.a.createElement("td",null,this.props.model.environments.map(function(e){return e.environment}).join(", ")),1==this.state.sidebarActive?r.a.createElement(b,{model:this.props.model,removeModal:this.removeModal}):null)}}]),a}(n.Component),y=Object(i.g)(E),x=function(e){function a(e){return Object(l.a)(this,a),Object(p.a)(this,Object(f.a)(a).call(this,e))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"container"},r.a.createElement("table",{className:"table table-hover w-100"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Model ID"),r.a.createElement("th",{scope:"col"},"Model Name"),r.a.createElement("th",{scope:"col"},"Product"),r.a.createElement("th",{scope:"col"},"Owner"),r.a.createElement("th",{scope:"col"},"Environment"))),r.a.createElement("tbody",null,this.props.models.map(function(e){return r.a.createElement(y,{model:e,key:e.model_id})})),r.a.createElement("tfoot",null)))}}]),a}(n.Component),C=t(16),j=t.n(C),w="http://localhost:10222",O="/api/v1/models";function N(e,a){return j.a.patch("".concat(w).concat(O,"/").concat(e,"/"),a).then(function(e){return e})}var T=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(p.a)(this,Object(f.a)(a).call(this))).state={modelList:[],loading:!1},e}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.setState({loading:!0}),j.a.get("".concat(w).concat(O)).then(function(e){return e}).then(function(a){e.setState({modelList:a.data.results},function(){e.setState({loading:!1})})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"card-header d-flex justify-content-center"},"Model List"),1==this.state.loading?r.a.createElement("div",{className:"progress m-1"},r.a.createElement("div",{className:"progress-bar progress-bar-animated progress-bar-striped bg-danger",style:{width:"100%"},role:"progressbar"})):null,r.a.createElement("div",{className:"card-body d-flex"},r.a.createElement(x,{models:this.state.modelList})))}}]),a}(n.Component),S=[{conf_name:"spark.app.name"},{conf_name:"spark.driver.cores"},{conf_name:"spark.driver.maxResultSize"},{conf_name:"spark.driver.memory"},{conf_name:"spark.driver.memoryOverhead"},{conf_name:"spark.executor.memory"},{conf_name:"spark.executor.pyspark.memory"},{conf_name:"spark.executor.memoryOverhead"},{conf_name:"spark.extraListeners"},{conf_name:"spark.local.dir"},{conf_name:"spark.logConf"},{conf_name:"spark.master"},{conf_name:"spark.submit.deployMode"},{conf_name:"spark.log.callerContext"},{conf_name:"spark.driver.supervise"},{conf_name:"spark.driver.extraClassPath"},{conf_name:"spark.driver.extraJavaOptions"},{conf_name:"spark.driver.extraLibraryPath"},{conf_name:"spark.driver.userClassPathFirst"},{conf_name:"spark.executor.extraClassPath"},{conf_name:"spark.executor.extraJavaOptions"},{conf_name:"spark.executor.extraLibraryPath"},{conf_name:"spark.executor.logs.rolling.maxRetainedFiles"},{conf_name:"spark.executor.logs.rolling.enableCompression"},{conf_name:"spark.executor.logs.rolling.maxSize"},{conf_name:"spark.executor.logs.rolling.strategy"},{conf_name:"spark.executor.logs.rolling.time.interval"},{conf_name:"spark.executor.userClassPathFirst"},{conf_name:"spark.redaction.regex"},{conf_name:"spark.python.profile"},{conf_name:"spark.python.profile.dump"},{conf_name:"spark.python.worker.memory"},{conf_name:"spark.python.worker.reuse"},{conf_name:"spark.files"},{conf_name:"spark.submit.pyFiles"},{conf_name:"spark.jars"},{conf_name:"spark.jars.packages"},{conf_name:"spark.jars.excludes"},{conf_name:"spark.jars.ivy"},{conf_name:"spark.jars.ivySettings"},{conf_name:"spark.jars.repositories"},{conf_name:"spark.pyspark.driver.python"},{conf_name:"spark.pyspark.python"},{conf_name:"spark.reducer.maxSizeInFlight"},{conf_name:"spark.reducer.maxReqsInFlight"},{conf_name:"spark.reducer.maxBlocksInFlightPerAddress"},{conf_name:"spark.maxRemoteBlockSizeFetchToMem"},{conf_name:"spark.shuffle.compress"},{conf_name:"spark.shuffle.file.buffer"},{conf_name:"spark.shuffle.io.maxRetries"},{conf_name:"spark.shuffle.io.numConnectionsPerPeer"},{conf_name:"spark.shuffle.io.preferDirectBufs"},{conf_name:"spark.shuffle.io.retryWait"},{conf_name:"spark.shuffle.service.enabled"},{conf_name:"spark.shuffle.service.port"},{conf_name:"spark.shuffle.service.index.cache.size"},{conf_name:"spark.shuffle.maxChunksBeingTransferred"},{conf_name:"spark.shuffle.sort.bypassMergeThreshold"},{conf_name:"spark.shuffle.spill.compress"},{conf_name:"spark.shuffle.accurateBlockThreshold"},{conf_name:"spark.shuffle.registration.timeout"},{conf_name:"spark.shuffle.registration.maxAttempts"},{conf_name:"spark.eventLog.logBlockUpdates.enabled"},{conf_name:"spark.eventLog.longForm.enabled"},{conf_name:"spark.eventLog.compress"},{conf_name:"spark.eventLog.dir"},{conf_name:"spark.eventLog.enabled"},{conf_name:"spark.eventLog.overwrite"},{conf_name:"spark.eventLog.buffer.kb"},{conf_name:"spark.ui.dagGraph.retainedRootRDDs"},{conf_name:"spark.ui.enabled"},{conf_name:"spark.ui.killEnabled"},{conf_name:"spark.ui.liveUpdate.period"},{conf_name:"spark.ui.liveUpdate.minFlushPeriod"},{conf_name:"spark.ui.port"},{conf_name:"spark.ui.retainedJobs"},{conf_name:"spark.ui.retainedStages"},{conf_name:"spark.ui.retainedTasks"},{conf_name:"spark.ui.reverseProxy"},{conf_name:"spark.ui.reverseProxyUrl"},{conf_name:"spark.ui.showConsoleProgress"},{conf_name:"spark.worker.ui.retainedExecutors"},{conf_name:"spark.worker.ui.retainedDrivers"},{conf_name:"spark.sql.ui.retainedExecutions"},{conf_name:"spark.streaming.ui.retainedBatches"},{conf_name:"spark.ui.retainedDeadExecutors"},{conf_name:"spark.ui.filters"},{conf_name:"spark.ui.requestHeaderSize"},{conf_name:"spark.broadcast.compress"},{conf_name:"spark.io.compression.codec"},{conf_name:"spark.io.compression.lz4.blockSize"},{conf_name:"spark.io.compression.snappy.blockSize"},{conf_name:"spark.io.compression.zstd.level"},{conf_name:"spark.io.compression.zstd.bufferSize"},{conf_name:"spark.kryo.classesToRegister"},{conf_name:"spark.kryo.referenceTracking"},{conf_name:"spark.kryo.registrationRequired"},{conf_name:"spark.kryo.registrator"},{conf_name:"spark.kryo.unsafe"},{conf_name:"spark.kryoserializer.buffer.max"},{conf_name:"spark.kryoserializer.buffer"},{conf_name:"spark.rdd.compress"},{conf_name:"spark.serializer"},{conf_name:"spark.serializer.objectStreamReset"},{conf_name:"spark.memory.fraction"},{conf_name:"spark.memory.storageFraction"},{conf_name:"spark.memory.offHeap.enabled"},{conf_name:"spark.memory.offHeap.size"},{conf_name:"spark.memory.useLegacyMode"},{conf_name:"spark.shuffle.memoryFraction"},{conf_name:"spark.storage.memoryFraction"},{conf_name:"spark.storage.unrollFraction"},{conf_name:"spark.storage.replication.proactive"},{conf_name:"spark.cleaner.periodicGC.interval"},{conf_name:"spark.cleaner.referenceTracking"},{conf_name:"spark.cleaner.referenceTracking.blocking"},{conf_name:"spark.cleaner.referenceTracking.blocking.shuffle"},{conf_name:"spark.cleaner.referenceTracking.cleanCheckpoints"},{conf_name:"spark.broadcast.blockSize"},{conf_name:"spark.broadcast.checksum"},{conf_name:"spark.executor.cores"},{conf_name:"spark.default.parallelism"},{conf_name:"spark.executor.heartbeatInterval"},{conf_name:"spark.files.fetchTimeout"},{conf_name:"spark.files.useFetchCache"},{conf_name:"spark.files.overwrite"},{conf_name:"spark.files.maxPartitionBytes"},{conf_name:"spark.files.openCostInBytes"},{conf_name:"spark.hadoop.cloneConf"},{conf_name:"spark.hadoop.validateOutputSpecs"},{conf_name:"spark.storage.memoryMapThreshold"},{conf_name:"spark.hadoop.mapreduce.fileoutputcommitter.algorithm.version"},{conf_name:"spark.rpc.message.maxSize"},{conf_name:"spark.blockManager.port"},{conf_name:"spark.driver.blockManager.port"},{conf_name:"spark.driver.bindAddress"},{conf_name:"spark.driver.host"},{conf_name:"spark.driver.port"},{conf_name:"spark.network.timeout"},{conf_name:"spark.port.maxRetries"},{conf_name:"spark.rpc.numRetries"},{conf_name:"spark.rpc.retry.wait"},{conf_name:"spark.rpc.askTimeout"},{conf_name:"spark.rpc.lookupTimeout"},{conf_name:"spark.core.connection.ack.wait.timeout"},{conf_name:"spark.cores.max"},{conf_name:"spark.locality.wait"},{conf_name:"spark.locality.wait.node"},{conf_name:"spark.locality.wait.process"},{conf_name:"spark.locality.wait.rack"},{conf_name:"spark.scheduler.maxRegisteredResourcesWaitingTime"},{conf_name:"spark.scheduler.minRegisteredResourcesRatio"},{conf_name:"spark.scheduler.mode"},{conf_name:"spark.scheduler.revive.interval"},{conf_name:"spark.scheduler.listenerbus.eventqueue.capacity"},{conf_name:"spark.scheduler.blacklist.unschedulableTaskSetTimeout"},{conf_name:"spark.blacklist.enabled"},{conf_name:"spark.blacklist.timeout"},{conf_name:"spark.blacklist.task.maxTaskAttemptsPerExecutor"},{conf_name:"spark.blacklist.task.maxTaskAttemptsPerNode"},{conf_name:"spark.blacklist.stage.maxFailedTasksPerExecutor"},{conf_name:"spark.blacklist.stage.maxFailedExecutorsPerNode"},{conf_name:"spark.blacklist.application.maxFailedTasksPerExecutor"},{conf_name:"spark.blacklist.application.maxFailedExecutorsPerNode"},{conf_name:"spark.blacklist.killBlacklistedExecutors"},{conf_name:"spark.blacklist.application.fetchFailure.enabled"},{conf_name:"spark.speculation"},{conf_name:"spark.speculation.interval"},{conf_name:"spark.speculation.multiplier"},{conf_name:"spark.speculation.quantile"},{conf_name:"spark.task.cpus"},{conf_name:"spark.task.maxFailures"},{conf_name:"spark.task.reaper.enabled"},{conf_name:"spark.task.reaper.pollingInterval"},{conf_name:"spark.task.reaper.threadDump"},{conf_name:"spark.task.reaper.killTimeout"},{conf_name:"spark.stage.maxConsecutiveAttempts"},{conf_name:"spark.dynamicAllocation.enabled"},{conf_name:"spark.dynamicAllocation.executorIdleTimeout"},{conf_name:"spark.dynamicAllocation.cachedExecutorIdleTimeout"},{conf_name:"spark.dynamicAllocation.initialExecutors"},{conf_name:"spark.dynamicAllocation.maxExecutors"},{conf_name:"spark.dynamicAllocation.minExecutors"},{conf_name:"spark.dynamicAllocation.executorAllocationRatio"},{conf_name:"spark.dynamicAllocation.schedulerBacklogTimeout"},{conf_name:"spark.dynamicAllocation.sustainedSchedulerBacklogTimeout"},{conf_name:"spark.streaming.backpressure.enabled"},{conf_name:"spark.streaming.backpressure.initialRate"},{conf_name:"spark.streaming.blockInterval"},{conf_name:"spark.streaming.receiver.maxRate"},{conf_name:"spark.streaming.receiver.writeAheadLog.enable"},{conf_name:"spark.streaming.unpersist"},{conf_name:"spark.streaming.stopGracefullyOnShutdown"},{conf_name:"spark.streaming.kafka.maxRatePerPartition"},{conf_name:"spark.streaming.kafka.minRatePerPartition"},{conf_name:"spark.streaming.kafka.maxRetries"},{conf_name:"spark.streaming.ui.retainedBatches"},{conf_name:"spark.streaming.driver.writeAheadLog.closeFileAfterWrite"},{conf_name:"spark.streaming.receiver.writeAheadLog.closeFileAfterWrite"},{conf_name:"spark.r.numRBackendThreads"},{conf_name:"spark.r.command"},{conf_name:"spark.r.driver.command"},{conf_name:"spark.r.shell.command"},{conf_name:"spark.r.backendConnectionTimeout"},{conf_name:"spark.r.heartBeatInterval"},{conf_name:"spark.graphx.pregel.checkpointInterval"},{conf_name:"spark.deploy.recoveryMode"},{conf_name:"spark.deploy.zookeeper.url"},{conf_name:"spark.deploy.zookeeper.dir"}],F=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(p.a)(this,Object(f.a)(a).call(this,e))).chunkConfigs=t.chunkConfigs.bind(Object(d.a)(t)),t.handleChange=t.handleChange.bind(Object(d.a)(t)),t.handleConfig=t.handleConfig.bind(Object(d.a)(t)),t.flattenConfigs=t.flattenConfigs.bind(Object(d.a)(t)),t.zipConfigs=t.zipConfigs.bind(Object(d.a)(t)),_.getEventEmitter().on("submit",function(e){N(e,t.zipConfigs(t.state.configChanges)).then(function(e){console.log(e)})}),t.state={searchTerm:"",configs:[],configVal:"",configChanges:{null:null}},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"returnConfigs",value:function(){return this.state.configChanges}},{key:"componentWillReceiveProps",value:function(){var e=this;this.props.envConfigs&&this.setState({configChanges:this.flattenConfigs(this.props.envConfigs)},function(){console.log(e.state.configChanges)})}},{key:"componentWillMount",value:function(){this.setState({configs:this.chunkConfigs(S,3)})}},{key:"flattenConfigs",value:function(e){for(var a={},t=0;t<e.length;t++)a[e[t].conf_name]=e[t].conf_value;return a}},{key:"zipConfigs",value:function(e){for(var a=[],t=Object.entries(e),n=0;n<t.length;n++){var r=t[n][0],s=t[n][1];a.push({conf_name:r,conf_value:s})}return{environments:[{environment:this.props.env,application_context_configs:a}]}}},{key:"chunkConfigs",value:function(e,a){for(var t=[],n=0;n<e.length;n+=a)t.push(e.slice(n,n+a));return t}},{key:"handleChange",value:function(e){var a=this;this.setState({searchTerm:e.target.value},function(){for(var e=[],t=0;t<S.length;t++)S[t].conf_name.includes(a.state.searchTerm)&&e.push(S[t]);a.setState({configs:a.chunkConfigs(e,3)})})}},{key:"handleConfig",value:function(e,a){var t=this,n=this.state.configChanges;this.setState({configVal:e.target.value},function(){n[a]=t.state.configVal,t.setState({configChanges:n})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"bg-light"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("span",{className:"d-flex justify-content-center"},r.a.createElement("input",{className:"form-control w-50 my-2",id:"search",value:this.state.searchTerm,onChange:this.handleChange.bind(this),placeholder:"Search..."})))),r.a.createElement("div",{className:"container",style:{height:"60vh",overflow:"auto"}},this.state.configs.map(function(a,t){return r.a.createElement("div",{key:t,className:"row"},a.map(function(a,t){return r.a.createElement("div",{key:"config_entry"+t,className:"col-sm-4"},r.a.createElement("div",{className:"form-group text-truncate"},r.a.createElement("label",{htmlFor:a.conf_name},a.conf_name),r.a.createElement("input",{className:"form-control",value:e.state.configChanges[a.conf_name],id:a.conf_name,onChange:function(t){return e.handleConfig(t,a.conf_name)}})))}))})))}}]),a}(n.Component),M=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(p.a)(this,Object(f.a)(a).call(this,e))).state={file_type:"",file_label:"",file_name:""},t.fileTypeList={input:["Historical Data","Economic Scenario","Other"],output:["Prediction","Result","Other"]},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentWillMount",value:function(){this.setState(this.props.settings)}},{key:"render",value:function(){return[r.a.createElement("td",null,this.state.file_label),r.a.createElement("td",null,r.a.createElement("input",{class:"form-control",value:this.state.file_name,id:"file_name_{this.state.file_label}"})),r.a.createElement("td",null,r.a.createElement("select",{class:"form-control",id:"file_type_{this.state.file_label}",value:this.state.file_type},this.fileTypeList[this.props.type].map(function(e){return r.a.createElement("option",null,e)})))]}}]),a}(n.Component),R=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(p.a)(this,Object(f.a)(a).call(this,e))).fileTypeList={input:["Historical Data","Economic Scenario","Other"],output:["Prediction","Result","Other"]},t.state={settings:[],newFileLabel:"",newFileName:"",newFileType:t.fileTypeList[t.props.type][0]},_.getEventEmitter().on("submit",function(e){N(e,t.formatRequest()).then(function(e){console.log(e)})}),t.handleChange=t.handleChange.bind(Object(d.a)(t)),t.createNew=t.createNew.bind(Object(d.a)(t)),t.formatRequest=t.formatRequest.bind(Object(d.a)(t)),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"formatRequest",value:function(){var e="input"===this.props.type?"application_input_settings":"application_output_settings",a={};return a.environment=this.props.env,a[e]=this.state.settings,{environments:[a]}}},{key:"componentWillMount",value:function(){this.setState({settings:this.props.settings})}},{key:"createNew",value:function(){var e=this,a=this.state.settings;a.push({file_name:this.state.newFileName,file_type:this.state.newFileType,file_label:this.state.newFileLabel}),this.setState({settings:a},function(){e.setState({newFileName:"",newFileType:"",newFileLabel:""})})}},{key:"deleteEntry",value:function(e){for(var a=this.state.settings,t=0;t<a.length;t++)a[t].file_label==e&&(a[t].file_type="");this.setState({settings:a})}},{key:"handleChange",value:function(e){var a={};a[e.target.id]=e.target.value,this.setState(a)}},{key:"render",value:function(){var e=this;return r.a.createElement("table",{class:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("th",{scope:"col"},"File Label"),r.a.createElement("th",{scope:"col"},"File Name"),r.a.createElement("th",{scope:"col"},"File Type"),r.a.createElement("th",{scope:"col"},"+ / -")),r.a.createElement("tbody",null,this.state.settings?this.state.settings.map(function(a){return a.file_type?r.a.createElement("tr",null,r.a.createElement(M,{type:e.props.type,settings:a}),r.a.createElement("td",null,r.a.createElement("button",{class:"btn btn-danger btn-block",onClick:function(){return e.deleteEntry(a.file_label)}},"x"))):null}):null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{class:"form-control",value:this.state.newFileLabel,id:"newFileLabel",placeholder:"Enter a file label...",onChange:function(a){return e.handleChange(a)}})),r.a.createElement("td",null,r.a.createElement("input",{class:"form-control",id:"newFileName",value:this.state.newFileName,placeholder:"Enter a file name...",onChange:function(a){return e.handleChange(a)}})),r.a.createElement("td",null,r.a.createElement("select",{class:"form-control",id:"newFileType",value:this.state.newFileType,onChange:function(a){return e.handleChange(a)}},this.fileTypeList[this.props.type].map(function(e){return r.a.createElement("option",null,e)}))),r.a.createElement("td",null,r.a.createElement("button",{class:"btn btn-success btn-block",onClick:function(){return e.createNew()}},"+")))))}}]),a}(n.Component),L=function(e){function a(e){return Object(l.a)(this,a),Object(p.a)(this,Object(f.a)(a).call(this,e))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg-light"},r.a.createElement("div",{className:"container p-5"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Inputs"),r.a.createElement("div",{className:"card-body"},r.a.createElement(R,{type:"input",settings:this.props.settings.input,env:this.props.env}))),r.a.createElement("div",{className:"card mt-3"},r.a.createElement("div",{className:"card-header"},"Outputs"),r.a.createElement("div",{className:"card-body"},r.a.createElement(R,{type:"output",settings:this.props.settings.output,env:this.props.env})))))}}]),a}(n.Component),P=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(p.a)(this,Object(f.a)(a).call(this,e))).state={tab:"spark"},t.switchTab=t.switchTab.bind(Object(d.a)(t)),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"w-100 container-fluid"},r.a.createElement("ul",{className:"nav nav-tabs nav-fill"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"spark"==this.state.tab?"nav-link active bg-light text-dark":"nav-link",onClick:function(){return e.switchTab("spark")}},"Spark Config")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"model"==this.state.tab?"nav-link active bg-light text-dark":"nav-link",onClick:function(){return e.switchTab("model")}},"I/O Config"))),r.a.createElement("div",{className:"container-fluid px-0 border-left border-right border-bottom"},"spark"==this.state.tab?r.a.createElement(F,{envConfigs:this.props.env.application_context_configs,env:this.props.env.environment}):null,"model"==this.state.tab?r.a.createElement(L,{settings:{input:this.props.env.application_input_settings,output:this.props.env.application_output_settings},env:this.props.env.environment}):null))}},{key:"switchTab",value:function(e){this.setState({tab:e})}}]),a}(n.Component),A=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(p.a)(this,Object(f.a)(a).call(this,e))).getModel=t.getModel.bind(Object(d.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(d.a)(t)),t.state={model:{model_id:null,model_name:null,product_name:null,model_owner:null,environments:[]},currentEnv:{environment:null},loading:!1},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentWillMount",value:function(){this.setState({loading:!0}),this.getModel(this.props.match.params.id)}},{key:"getModel",value:function(e){var a=this;this.setState({loading:!0}),function(e){return j.a.get("".concat(w).concat(O,"/").concat(e)).then(function(e){return e})}(this.props.match.params.id).then(function(e){a.setState({model:e.data,currentEnv:e.data.environments[0]},function(){a.setState({loading:!1})})})}},{key:"switchEnv",value:function(e){this.setState({currentEnv:e})}},{key:"handleSubmit",value:function(){_.getEventEmitter().emit("submit",this.state.model.model_id)}},{key:"render",value:function(){var e=this;return console.log(this.state.changes),r.a.createElement("div",null,r.a.createElement("div",{className:"card-header justify-content-center"},this.state.loading?r.a.createElement("div",{className:"progress m-1"},r.a.createElement("div",{className:"progress-bar progress-bar-animated progress-bar-striped bg-danger",style:{width:"100%"},role:"progressbar"})):r.a.createElement("div",{className:"justify-content-between d-flex"},r.a.createElement("div",null,r.a.createElement("span",{className:"d-flex"},r.a.createElement("h1",{className:"card-title"},this.state.model.model_id," | ",this.state.model.model_name)),r.a.createElement("span",{className:"d-flex"},r.a.createElement("h3",{className:"card-subtitle text-muted"},this.state.model.product_name," - ",this.state.model.model_owner))))),r.a.createElement("div",{className:"card-body d-flex justify-content-center"},1==this.state.loading?r.a.createElement("div",{className:"progress m-1"},r.a.createElement("div",{className:"progress-bar progress-bar-animated progress-bar-striped bg-danger",style:{width:"100%"},role:"progressbar"})):null,this.state.model.environments.map(function(a){return r.a.createElement("button",{className:e.state.currentEnv.environment==a.environment?"btn mx-1 justify-content-between btn-primary":"btn mx-1 justify-content-between btn-secondary",onClick:function(){return e.switchEnv(a)}},r.a.createElement("small",{className:"mr-1"},a.environment),r.a.createElement("span",{class:"badge badge-pill badge-light"},a.application_context_configs.length))})),r.a.createElement("hr",{className:"m-0"}),r.a.createElement("div",{className:"card-body d-flex"},r.a.createElement(P,{env:this.state.currentEnv})),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{className:"btn btn-success float-right",onClick:function(){e.handleSubmit()}},"Submit")))}}]),a}(n.Component),z=function(){return r.a.createElement(c.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",render:function(){return r.a.createElement(i.a,{to:"/models/"})}}),r.a.createElement(i.b,{exact:!0,path:"/models/",component:T}),r.a.createElement(i.b,{exact:!0,path:"/models/:id",component:A})))};var B=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-blue"},r.a.createElement("a",{className:"navbar-brand"},"Model Execution Platform"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"}))),r.a.createElement("div",{className:"d-flex justify-content-center mt-5"},r.a.createElement("div",{className:"card w-75"},r.a.createElement(z,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.d2ce925d.chunk.js.map