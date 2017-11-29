# G2-demo

### map.html 人口分布图

从国家统计局网站获取各省份人口分布数据通过G2显示

```bash
cd assets && curl http://www.stats.gov.cn/tjsj/pcsj/rkpc/6rp/html/A0101a.htm | iconv -f GB2312 -t UTF8 > pop.html

node getPopulation.js

```
