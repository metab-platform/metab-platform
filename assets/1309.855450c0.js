const a=[0,0,0,.27,0,.39,.05,.24,0,0,0,.92,.6,0,0,.71,0,.56,.03,.82,.57,.02,.98,0,0,0,.11,.57,.02,.59,0,.02,0,.44,.07,.18,0,0,.01,0,.56,0,0,.44,.3,0,.21,.14,.14,.28,.03,.7,0,0,.01,0,0,.98,.04,0,0,0,0,.6,.01,.57,0,0,.9,.72,.47,0,.04,.12,0,.48,.58,.02,0,.71,0,0,.43,0,.05,.08,0,.52,0,0,.53,.52,.26,0,.38,.1,0,.29,.03,.01,.42,0,0,.4,0,.5,.74,.95,0,0,.85,.02,.65,0,.19,0,.47,.32,0,0,.58,.42,0,.08,.76,0,0,0,.73,0,.01,0,.13,.76,0,.11,.38,.2,.69,.51,0,.68,0,0,.9,.14,.79,.04,0,.06,0,.7,.82,.43,.1,.22,.75,.8,.09,0,.07,0,.36,.23,.17,.08,0,.34,.03,0,.8,.52,.1,0,0,.98,.46,.55,.35,0,.72,.38,.8,0,0,.26,.15,.06,.67,.03,.14,.99,.2,0,0,0,0,.08,.77,.02,0,0,0,.84,0,0,.76,.44,.23,.2,.04,0,.71,0,.99,.01,.42,.71,.85,.46,0,.01,.01,0,0,0,.07,.69,.09,.63,.4,.16,0,0,.05,.63,0,0,.3,.36,.01,0,.04,.01,.24,.05,.15,.11,.09,.62,.54,.08,.01,.36,0,.85,.45,0,.99,0,.06,.14,0,0,.02,0,.36,0,.04,0,.97,0,0,0,0,.68,.07,.12,0,.24,.93,.64,0,0,.72,0,.54,0,.38,.34,.1,.21,0,.27,.53,0,0,0,.67,.39,.87,0,.24,.24,.28,0,.33,0,.05,0,0,.41,.06,.83,.16,.48,.34,.38,0,.01,0,.4,0,0,.17,.85,0,.01,.89,.54,0,0,.06,.22,.02,.86,.99,0,.52,.02,0,0,0,.88,0,0,.48,.72,0,.47,0,0,.08,.86,0,0,.01,.61,0,0,0,.12,.76,.64,.3,0,.53,0,.03,.16,.04,.01,.01,.01,.02,.47,.01,0,.55,.78,.15,.94,.24,.12,.69,0,.62,.81,0,0,0,.4,.11,.92,.85,0,0,.09,.01,.6,.07,.47,0,0,.5,.42,0,0,0,0,0,0,0,0,.55,.71,0,0,.85,0,.59,0,.68,.83,.03,0,0,.52,.57,0,.01,0,0,.3,.08,0,.03,0,0,0,0,0,0,.42,.05,0,0,0,.71,0,0,0,0,.35,.29,.11,.32,0,.25,0,0,0,0,.1,.85,.97,0,.37,0,0,.42,0,0,.13,.56,0,0,.33,0,.41,0,0,0,.04,.05,.56,.01,0,0,0,.45,.92,.01,0,0,0,.14,.86,0,0,.64,.02,0,0,0,.02,.12,0,0,.01,0,.35,0,.97,.02,.45,.62,.42,.27,0,.76,0,.47,.16,0,.79,.02,0,.24,0,.84,.09,.07,.04,.68,.86,.97,0,0,.2,.45,.75,.18,.24,.89,.02,.97,.17,0,.9,.84,0,0,0,0,.14,0,.04,.02,.48,0,.71,.27,.08,.57,.08,.24,.5,.42,.85,0,0,.02,0,0,0,.08,0,.23,.03,.91,.03,0,.85,0,0,0,0,.92,0,.26,.56,.81,0,.12,0,0,0,.01,.18,0,0,0,.18,0,.19,.59,.01,.02,.47,.48,0,.19,.97,.03,.98,0,.06,.52,.52,.04,.14,.88,.42,.1,.11,.01,.76,0,.01,.17,.01,.02,.5,.01,0,0,.08,.02,.07,.98,0,0,.74,.03,0,0,0,.6,0,.31,0,.6,0,0,.53,0,.99,.05,.8,0,0,0,.69,.02,.37,.32,.4,0,0,0,.67,.42,.38,.01,0,0,0,0,.14,.6,0,0,0,.09,.02,0,0,0,0,.38,.01,0,.08,.29,0,0,.11,0,0,0,.99,0,0,.98,.8,.07,0,.56,.18,0,.09,.15,.57,.12,.2,.93,.65,.24,.11,.84,0,0,.68,0,0,.01,.01,.02,0,0,.05,0,.6,0,.21,0,.05,.34,.26,0,0,0,.46,.75,0,0,0,.6,0,.27,.72,.07,.03,0,.2,.32,0,0,.7,.01,.27,0,.12,0,0,0,.03,.92,.61,0,.1,0,.76,.78,0,.61,.5,0,.68,0,.57,.79,0,0,0,.01,.1,.78,.39,0,.07,0,0,0,.44,0,0,0,.02,.62,.01,0,0,0,0,0,.02,.86,1,.98,.05,0,0,0,.23,0,.46,.12,0,.45,.05,.05,0,.93,0,.61,.25,.5,.39,.18,0,.1,.03,.78,.47,.61,.78,.05,.08,0,0,.41,.02,.19,0,.27,.49,0,.48,.49,.62,0,.36,.55,.32,.9,.38,.61,.45,0,0,.16,0,0,.01,0,.69,.86,.01,0,.11,.57,.76,0,.6,.12,.95,.72,.51,.55,0,.07,0,0,.83,.43,0,0,.17,0,0,0,.02,0,.93,0,.03,0,0,.1,.43,.95,.56,.62,0,.08,.45,.49,.06,.3,.52,.99,.01,0,.02,.33,.22,0,.6,0,.55,0,0,0,0,.81,0,0,.76,.95,0,0,0,0,0,.06,.45,0,0,.51,.62,.4,0,.91,.82,.58,0,.24,.05,.1,.59,.26,.14,.58,0,0,.1,0,.8,0,.33,.41,.34,0,.12,.72,.97,0,.15,.58,0,0,0,0,.77,.13,.56,.49,0,0,.02,.03,.94,.49,.08,0,.21,.46,.39,0,.01,.96,.06,.33,.16,.38,.96,.56,.52,.55,.54,.5,.8,.17,.02,.6,.03,.22,.95,.81,0,.63,.44,.01,.02,0,0,0,.24,0,.68,0,0,.08,.72,0,.42,.07,.71,.04,.79,.03,.58,.28,0,0,.13,0,.98,.18,0,.23,.33,.45,.59,.42,.02,.24,0,.26,0,.01,.46,0,.06,0,.74,.01,0,.6,.96,.6,0,.41,.44,.43,0,0,.38,.2,.21,.04,0,.35,0,0,.05,0,0,.64,.03,.33,.58,.11,.05,.17,.02,.04,0,.83,0,0,.02,0,0,.05,.62,0,0,0,0,0,0,0,0,0,.84,0,.5,.23,.08,.03,.82,.4,.19,.02,0,.67,0,.01,0,.13,.08,0,.53,.28,0,.38,.19,.02,0,0,.05,.58,0,0,0,.81,0,0,.6,.54,0,0,.75,0,0,0,.67,.29,0,.21,0,.08,.23,.84,.3,.47,.77,0,0,.13,.68,0,0,0,0,0,0,.12,.07,0,.69,0,.07,0,.19,0,.94,.01,.11,.4,0,0,.38,0,0,.31,0,.9,.01,0,.96,0,.86,.01,0,0,0,.89,0,.76,0,.74,0,0,0,0,.11,0,.25,.04,0,0,.28,.72,0,0,.49,.08,0,0,.75,.98,.69,.61,.93,.88,.36,.88,0,0,.2,0,0,0,.51,.5,.76,0,0,0,.39,.97,.32,.95,.02,0,.65,0,.07,.18,.88,.19,.62,0,.01,.01,0,0,0,.73,.01,.53,.31,.09,.37,.1,.81,0,.48,0,0,.19,0,0,0,.09,.16,0,.22,0,.27,.02,.99,0,.15,.98,.32,.02,0,0,0,0,.46,.12,0,0,0,0,0,.39,.32,.11,0,.11,0,0,.7,.05,0,0,.01,.09,.74,.18,0,0,.7,.12,.03,.01,.01,.13,.02,0,0,0,.54,.95,0,0,0,.45,.07,0,.9,.78,0,0,.02,.04,0,.22,.93,.1,0,.91,.08,.07,.94,0,0,.76,.34,.75,.12,.04,.34,0,0,.3,.02,0,.22,0,.61,.62,0,0,.88,.52,0,.63,.03,0,0,.04,0,.82,0,.03,.85,.31,0,.05,.89,0,0,.66,0,.48,.01,0,0,.01,.05,0,.01,.26,.36,.01,0,0,0,.32,.04,0,.06,0,0,.29,.2,.45,0,.71,.54,.08,.55,0,.6,.95,.2,.6,.16,0,.49,1,0,.52,.65,0,.29,0,0,.94,.03,.04,.66,.07,0,0,0,.85,.01,.77,.02,.59,0,0,.05,.11,0,0,0,0,.62,.75,.77,.36,.21,0,.41,.01,0,.01,.51,.02,0,.84,.08,0,.34,0,.03,0,0,0,.18,.25,0,.21,0,.01,0,.05,.19,.58,.01,0,0,.04,.81,.39,0,.3,.76,.47,0,.7,.17,0,.44,0,0,0,.03,.44,0,0,0,.09,.02,.09,.06,0,.05,0,0,.4,.74,0,.01,.59,.02,0,.53,.04,.36,0,0,.79,0,0,.77,.77,0,0,0,0,.66,0,0,0,0,0,.92,0,.29,0,.66,0,0,.98,.94,0,0,0,0,.17,.06,0,0,.05,.79,0,0,0,.57,0,0,0,0,.86,0,.19,.23,0,0,0,.7,0,0,0,.12,.03,0,0,0,0,.6,.65,.64,.02,.46,0,.94,.08,0,.19,0,0,.28,0,0,.13,.46,0,.08,0,0,.03,.76,0,0,.04,0,.12,0,.11,0,.04,0,.48,.3,.95,.09,.7,0,0,.1,0,.08,.01,.64,.84,0,0,0,0,0,.01,.11,.22,.15,.01,.9,.17,0,0,0,.3,0,0,.55,.01,.71,0,.01,.27,0,0,0,0,.98,0,.01,0,.01,0,0,0,0,0,.16,0,.53,0,0,.4,0,.14,.38,0,.16,.24,0,.17,.05,.88,.56,.88,.97,.98,0,0,0,.01,0,0,0,0,0,0,.4,.05,.28,0,.98,0,.1,.05,.02,.55,0,0,0,.11,0,0,.5,0,.23,0,0,0,0,.54,.98,.46,.42,.3,0,0,0,.01,0,.07,0,.97,.85,.03,.66,0,.21,0,0,0,0,.9,0,0,0,.68,.05,.46,0,0,.16,.8,0,.58,0,.52,.53,.01,.38,0,0,.08,0,0,.02,0,0,.16,0,.83,0,0,0,0,0,0,0,0,0,0,.16,0,0,0,0,.02,0,.46,0,0,0,.27,.83,.38,.34,0,.55,0,.48,0,0,0,0,0,0,0,.74,0,.79,.02,0,.21,.3,.33,0,0,0,.02,.89,0,.07,0,.16,.31,.51,.56,.97,.59,0,0,.52,.06,0,.07,0,.02,.09,.58,.84,.05,.03,0,.6,.2,0,.92,.01,0,0,0,.09,.55,0,.05,.06,0,0,0,.11,0,.12,0,.68,0,.67,.03,.2,.75,0,.22,0,.89,0,.01,.16,0,0,0,0,.01,.4,0,.12,0,.28,.48,.15,0,0,.88,0,0,0,.04,.81,0,0,.95,.04,.21,0,0,.34,0,0,0,.74,.93,0,0,.59,0,.2,.61,0,.87,.53,.1,0,0,0,.25,.49,.03,.77,0,0,.21,.99,.86,.18,0,0,0,.32,0,0,0,0,0,.67,.77,0,0,.2,.01,.79,.24,.23,0,0,0,0,.2,0,0,.05,.12,.7,.53,0,.1,.33,.37,0,0,0,0,0,.42,0,.05,0,.89,.23,.08,0,0,.47,.54,0,.14,0,0,0,.16,0,.34,.59,0,0,0,0,0,.04,0,.2,0,0,.87,0,0,0,0,0,0,0,.36,0,0,.11,.59,0,0,0,0,0,0,0,0,.14,0,0,.93,0,0,.98,0,0,0,0,.52,.52,.33,.03,0,.98,0,0,0,.01,.62,.76,.46,.93,.18,0,.75,.57,0,.84,.42,0];export{a as pvalData};
