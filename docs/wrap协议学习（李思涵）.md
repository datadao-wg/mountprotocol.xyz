# wrap协议学习（李思涵）

wrap协议主要分为3部分：deployer,factory,agency

deployer：wrap协议的通行证，只有deployer才可以提供协议部署NFT

agency：资金池，用户铸造NFT的ERC20代币会被存在agency里面

factory：方便持有 depolyer NFT 的用户快速部署 agency 和 app

## 大致流程

1、任何用户可能mint deployer，输入为注册的名字并填入交易最大可用ETH数量就可以实现deployer NFT的铸造

2、配置tokenURI为该NFT设置图片(也可以修改tokenURI为设置视频、文件等任何数据)

3、部署app(NFT合约)和agency（资金池），选择agency中的报价逻辑并配置agency中的结构体Asset

```solidity
struct Asset {
    address currency;
    uint256 premium;
    address feeRecipient;
    uint16 mintFeePercent;
    uint16 burnFeePercent;
}
```

premium为权益金，任何mint了该NFT的用户都能获得权益金，越早加入的用户在最后的收益越大

4、为NFT合约配置tokenURI

5、部署者完成部署后，用户可以mint(wrap操作)获得NFT，脚本会读取agency并给出现在的报价，用户完成wrap操作后，也可以配置自己的tokenURI

6、用户可以实现 ERC6551 钱包的部署，也可以调用unwrap操作按上一次报价情况退还给用户代币

## 激励机制

用户通过wrap操作(mint)在资金池中投入ERC20代币获取NFT，有一定量的权益金，后续若有越来越多的用户mint，资金池越来越大，越早加入的用户获取的权益金也就越多，用户也可以在后续直接通过unwrap操作按上一次报价情况退还给用户代币，但是如果不退出持续建设社区，会持续获得手续费的分成，NFT会一直有收益

## 总结

wrap协议实现了FT和NFT之间的相互转换，任何东西都可以是NFT，比如图片、视频、文件、各种数据等，这就给了wrap协议很广的应用空间，wrap核心是从无到有建立在信用之上的新范式，NFT是链上独立的行为主体，具有与其他dApp或智能合约进行交互的能力，可以在链上进行任何经济或社会活动，成为了一种可以承载信用的链上信用主体，同时也是一种自我背书，人人可发行信用，人人可以创建链上的社区