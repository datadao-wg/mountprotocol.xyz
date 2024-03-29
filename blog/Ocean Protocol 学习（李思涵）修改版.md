# Ocean Protocol 学习（李思涵）修改版

## 背景

数据只有在被提炼并使用时，其价值才会显现出来。然而世界上只有0.5%的数据被实际使用和分析，其余的数据都沉睡在筒仓中，原因为没有足够的激励使得数据拥有者分享出自己的数据，大部分数据拥有者害怕泄露隐私或知识产权，不愿意分享出自己拥有的数据。

## 什么是Ocean协议

Ocean协议主要**提供了一个去中心化的数据交易平台**，允许数据提供者通过去中心化的数据交易市场与数据消费者进行交易，ocean协议的出现让数据得以共享流通，数据的交易也就产生了价值，从而使得DataDaos成为了可能。

Ocean协议的三个核心功能：1、鼓励公开共享和货币。2、允许个人或实体安全地分享敏感数据。3、通过为数据创造流动性更强的市场，实现更好的价格发现

## 关于数据交易

### 公开数据交易

Ocean协议由几个核心部分组成：

1、数据提供者（数据所有者），可以出售对资产的访问权

2、Ocean Protocol：EVM和智能合约的集合，包括Ocean代币合约，维护资产所有权的登记册，提供去中心化的存储，并促进安全的数据交换。

3、Ocean Marketplace：去中心化数据资产交易所

4、Squid:将这一切联系起来的技术栈

Ocean Marketplace是这个协议的一个产品，数据所有者在这儿发布他们的数据集，通过代币化实现（ERC20代币），**被代币化的不是数据本身，而是对数据的访问**。数据的所有者有能力决定他们想发行多少数据代币，以及他们希望以何种价格出售对信息的访问，同时他们也能够设置数据访问次数或时间、赎回数据的时间段限制和读取与写入访问

### 敏感数据交易

那么敏感数据又是怎么交易的呢？

Ocean有一个“计算到数据”（compute-to-data）的功能，数据科学家、研究人员和其他感兴趣的人可以在有价值的数据集上运行算法和机器学习程序，而不需要实际拥有数据本身。即保证算法在隔离和安全的环境下在数据集上运行，让敏感数据可以被用于算法 训练，但数据本身的敏感信息并不会泄露。有了这个功能，那些不能在市场上公开消费的敏感数据仍然可以被代币化并投入使用。这样，数据所有者的隐私能得到保护，为自己获利，同时也能够为他人谋利。

那Ocean协议是如何保证数据安全的呢？——规定算法类型

为了规范算法的使用，Ocean协议引进了一种新的资产类型：算法。

算法是一种小型脚本，可以在满足计算到数据的安全条件下在数据集上运行。算法可以看作是一种能够带来现金流的知识产权，自然也是一种资产。

因此，“计算到数据”还能够激励数据科学家等相关人士尽可能的开发出安全又高效的算法来最大程度释放数据的价值。

## Ocean交易市场

在Ocean中有两种token：Ocean token和数据token

Ocean token：是Ocean协议的**治理token**，其核心功能有：1、通过质押的形式参与数据管理。2、用于购买数据token、参与DAO治理。因此，质押添加流动性和购买数据token都要用到Ocean token

数据token：代表数据资产的访问权。当一个数据资产发布在交易市场时，对应的数据token也被创建。数据token是一种ERC20token，授予持有人对特定数据集或数据流的访问权。

Ocean交易市场通过**Banlancer**来实现数据交易和自动价格发现机制。数据所有者在发布数据的时候，借助Ocean协议自动创建流动性池（添加流动性Ocean token+数据token）。在不断交易过程当中，数据token的价格也在不断地更新，当趋于均衡价格时，也就达到了价格发现的效果

Balancer的作用：1、Balancer可以调节流动性池中token的比例2、数据发布者可以调节流动性池的交易费用，范围在0.1%到5%，这样自由的费用设定，能够吸引优质数据资产的用户进入。

用户可以往流动性池中提供流动性，获得与他们质押大小成比例的交易费用的奖励。

不仅如此，在Ocean协议里，质押机制还巧妙的将用户的收益和提高数据质量绑定在一起，数据交易市场将用户对高收益的寻找过程转化成数据市场上发现高质量可信数据的过程，是一种非常巧妙的设计。

## 关于Ocean协议的SEA

SEA（Ocean Service Execution Agreements）将SLA的概念带入区块链。SEA不仅可以利用合法的法律协议，还能够增加数学安全性（加密、签名、哈希、加密证明等）和自动化。SEA是以下服务的基础：去中心化访问控制、冲突解决、服务消费来源、网络激励。SEA由DID、serviceAgreementId（引用于发布者和消费者之间的一个单独的协议），serviceDefinitionId(引用于消费者希望使用的服务)，templateId(引用于一个源自独特的服务协议的服务协议模板)组成。

但即使SEA功能强大，但对于典型的数据科学家而言却非常复杂