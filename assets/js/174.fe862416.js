(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{531:function(_,v,o){"use strict";o.r(v);var e=o(7),s=Object(e.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[v("code",[_._v(".ssh")]),_._v(" 目录下的核心文件及作用详解")]),_._v(" "),v("p",[v("code",[_._v(".ssh")]),_._v(" 目录是 SSH（Secure Shell）协议的核心配置与密钥存储位置，位于用户的家目录下（如 "),v("code",[_._v("/home/username/.ssh")]),_._v(" 或 "),v("code",[_._v("/root/.ssh")]),_._v("）。以下是其主要文件及其功能：")]),_._v(" "),v("hr"),_._v(" "),v("p",[v("strong",[_._v("1. 密钥文件")]),_._v("\n• "),v("code",[_._v("id_rsa")]),_._v(" / "),v("code",[_._v("id_ed25519")]),_._v(" 等")]),_._v(" "),v("p",[_._v("• 作用：存储用户的 私钥，用于身份验证。私钥必须严格保密，仅对所有者开放读写权限（"),v("code",[_._v("600")]),_._v("）。若泄露可能导致安全风险。")]),_._v(" "),v("p",[_._v("• 生成方式：通过 "),v("code",[_._v("ssh-keygen -t rsa")]),_._v("（或其他算法如 "),v("code",[_._v("ed25519")]),_._v("）生成密钥对。")]),_._v(" "),v("p",[_._v("• "),v("code",[_._v("id_rsa.pub")]),_._v(" / "),v("code",[_._v("id_ed25519.pub")]),_._v(" 等")]),_._v(" "),v("p",[_._v("• 作用：对应私钥的 公钥，需分发到目标服务器（如复制到 "),v("code",[_._v("authorized_keys")]),_._v(" 文件），实现免密登录。公钥内容可公开。")]),_._v(" "),v("p",[_._v("• 示例命令："),v("code",[_._v("ssh-copy-id user@remote_host")]),_._v(" 快速复制公钥到远程主机。")]),_._v(" "),v("hr"),_._v(" "),v("p",[v("strong",[_._v("2. 授权与认证文件")]),_._v("\n• "),v("code",[_._v("authorized_keys")])]),_._v(" "),v("p",[_._v("• 作用：存储 允许访问本机的公钥列表。将其他主机的公钥添加到此文件后，对应私钥的持有者即可免密登录本机。")]),_._v(" "),v("p",[_._v("• 权限要求：建议设置为 "),v("code",[_._v("600")]),_._v("，避免未授权访问。")]),_._v(" "),v("p",[_._v("• "),v("code",[_._v("known_hosts")])]),_._v(" "),v("p",[_._v("• 作用：记录 已连接过的远程主机的公钥信息。首次连接时会自动添加，后续连接时验证公钥一致性以防止中间人攻击。")]),_._v(" "),v("p",[_._v("• 异常处理：若远程主机公钥变更（如重装系统），需手动删除对应条目或使用 "),v("code",[_._v("ssh-keygen -R hostname")]),_._v(" 清除。")]),_._v(" "),v("p",[_._v("• "),v("code",[_._v("known_hosts.old")])]),_._v(" "),v("p",[_._v("• 作用：当 "),v("code",[_._v("known_hosts")]),_._v(" 文件更新时（如公钥变更），系统自动备份旧版本到此文件。")]),_._v(" "),v("hr"),_._v(" "),v("p",[v("strong",[_._v("3. 配置文件")]),_._v("\n• "),v("code",[_._v("config")])]),_._v(" "),v("p",[_._v("• 作用：定义 SSH客户端的连接参数，简化常用主机的登录流程。可配置别名、端口、用户、密钥路径等。")]),_._v(" "),v("p",[_._v("• 示例配置：")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[_._v("```bash\nHost myserver\n    HostName 192.168.1.100\n    User root\n    Port 2222\n    IdentityFile ~/.ssh/id_rsa\n```\n")])])]),v("p",[_._v("• 权限要求：建议设置为 "),v("code",[_._v("600")]),_._v("，防止恶意篡改。")]),_._v(" "),v("hr"),_._v(" "),v("p",[v("strong",[_._v("4. 其他文件")]),_._v("\n• "),v("code",[_._v("environment")])]),_._v(" "),v("p",[_._v("• 作用：定义用户通过SSH登录时加载的 额外环境变量，如 "),v("code",[_._v("PATH")]),_._v(" 或自定义变量。")]),_._v(" "),v("p",[_._v("• "),v("code",[_._v("rc")])]),_._v(" "),v("p",[_._v("• 作用：在用户SSH登录后、启动Shell前执行 自定义命令（如初始化环境或安全检查），需谨慎使用。")]),_._v(" "),v("hr"),_._v(" "),v("p",[v("strong",[_._v("5. 权限与安全建议")]),_._v("\n• 目录权限："),v("code",[_._v(".ssh")]),_._v(" 目录应设置为 "),v("code",[_._v("700")]),_._v("（仅所有者可读写执行）。")]),_._v(" "),v("p",[_._v("• 密钥文件权限：私钥文件（如 "),v("code",[_._v("id_rsa")]),_._v("）必须为 "),v("code",[_._v("600")]),_._v("，公钥和配置文件建议 "),v("code",[_._v("644")]),_._v("。")]),_._v(" "),v("p",[_._v("• 风险提示：")]),_._v(" "),v("p",[_._v("• 避免在共享环境中使用弱口令或无口令私钥。")]),_._v(" "),v("p",[_._v("• 定期检查 "),v("code",[_._v("known_hosts")]),_._v(" 和 "),v("code",[_._v("authorized_keys")]),_._v("，移除无效或可疑条目。")]),_._v(" "),v("hr"),_._v(" "),v("p",[v("strong",[_._v("典型应用场景")])]),_._v(" "),v("ol",[v("li",[_._v("免密登录：通过公钥授权实现快速远程管理。")]),_._v(" "),v("li",[_._v("自动化脚本：结合 "),v("code",[_._v("config")]),_._v(" 文件简化多主机操作（如批量部署）。")]),_._v(" "),v("li",[_._v("安全审计：通过 "),v("code",[_._v("known_hosts")]),_._v(" 验证服务器身份，防范中间人攻击。")])]),_._v(" "),v("p",[_._v("如需更详细的配置示例或问题排查方法，可参考原文链接或搜索相关文档。")])])}),[],!1,null,null,null);v.default=s.exports}}]);