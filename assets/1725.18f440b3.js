const a=[0,0,0,.79,0,.22,.02,.91,.04,.03,.08,.59,.44,0,0,.52,.01,.3,.11,.95,.48,.06,.34,.17,0,0,.01,.34,0,.01,0,0,0,.05,.35,.12,0,0,0,0,.07,0,0,.76,.15,.1,.93,.05,.25,.01,.18,.16,.01,0,0,.33,.03,.05,0,0,0,0,0,.88,.46,.31,0,0,.49,.95,.45,0,0,.02,0,.61,.05,0,0,.09,0,0,.67,0,.25,.01,0,.75,0,0,0,.39,.1,0,.75,.55,0,.03,.92,0,.76,0,0,.28,0,.93,.03,.08,0,0,.36,0,.82,0,.78,0,.31,.22,0,0,.6,.1,.01,.45,.71,0,0,.88,.26,0,.75,0,.5,.21,.02,.17,.21,.01,.11,.98,0,.26,0,0,.7,.42,.41,.08,0,.26,0,.23,.79,.59,.86,0,.59,.99,0,.01,.25,0,.72,.01,.04,0,0,.01,.21,0,.5,.12,.57,.05,0,.1,.74,.26,0,0,.46,.92,.3,0,0,.88,.46,.06,.01,.1,.22,.1,.58,0,0,0,0,0,.83,.01,.22,0,0,.85,0,0,.17,0,.01,.66,.47,0,.46,0,.07,.06,.64,.77,.07,0,0,0,0,0,0,0,.72,.16,0,0,.39,.98,0,0,.13,.26,0,.37,.06,.91,0,0,.2,.76,.33,.02,.23,.19,.05,.66,.03,.08,0,.01,0,.08,.25,0,.08,0,.77,.01,0,0,.25,0,0,0,.86,0,.77,.02,0,0,0,.82,.89,0,0,.2,.01,0,.03,0,0,0,.01,0,0,.46,.34,0,0,.07,.2,0,.35,0,.58,.05,.59,0,.05,.12,.62,0,.43,0,0,.28,0,.36,.21,.74,0,.06,.01,0,0,.02,0,.78,0,0,.28,0,0,.95,.71,0,0,0,.37,.42,.01,.47,.21,0,.01,.01,0,0,.11,.92,0,0,.3,0,0,.03,0,.09,.07,0,0,.01,0,.3,0,0,0,.33,0,.03,.23,0,0,0,0,.6,.07,0,.31,.65,0,.01,0,0,.48,0,.4,.61,.84,.4,.33,0,.18,.7,0,0,0,.78,.89,.02,.01,0,0,.08,.58,.91,.4,0,0,0,0,.69,0,0,0,0,0,0,.94,0,.01,.82,0,0,.01,0,.27,0,.56,.27,0,0,0,.46,0,.01,.09,.81,0,.5,.16,0,0,0,0,0,0,0,0,.5,.11,0,0,0,.64,0,.17,0,0,.13,.21,.19,.02,0,.01,0,0,0,0,0,.98,.01,0,.23,0,0,.11,0,0,.47,0,0,0,.69,0,0,0,0,0,.01,.07,.04,0,.16,0,0,.67,.53,.05,.18,0,0,.02,.09,0,.51,0,.49,0,0,0,.38,.04,0,0,0,0,.04,0,.62,.1,.12,.02,.63,0,0,.31,0,.47,.86,0,.62,.35,0,.77,0,.02,.03,.06,.35,.79,.42,0,.01,.58,.33,.96,0,.45,.72,.18,.36,.66,.86,0,.03,0,0,0,0,0,.33,0,.13,0,.14,0,.59,0,.51,.22,.05,.41,.74,0,.35,0,0,.65,.04,0,0,.25,0,0,.02,.1,.09,0,0,0,0,0,0,.92,0,.1,.93,.73,0,.52,0,0,0,0,.65,0,0,0,.02,0,.04,.07,.04,.3,.04,.72,0,.38,.07,.11,.97,0,.03,.5,.81,.86,.66,.03,.52,.02,.14,.13,0,0,0,.24,0,0,0,0,0,0,.58,.1,.01,.03,0,0,.6,0,0,.64,0,.35,0,.57,0,.45,0,0,.83,0,.15,.43,.92,0,0,0,0,0,.13,.35,.01,0,0,.01,.6,.1,0,0,.4,0,0,0,.29,.47,.22,0,0,.05,.01,0,0,0,.33,.22,.1,.02,.05,.63,.06,.01,0,0,0,0,.64,0,0,.65,.61,.19,0,.25,.03,0,.35,.04,.74,.52,.54,.7,.1,.01,.35,.74,0,0,.09,0,0,0,0,.02,0,0,.03,0,.79,0,.17,0,.31,.17,.16,.01,0,0,.48,.45,0,0,0,.18,0,.17,.96,.29,.01,0,.79,.64,0,0,.94,.01,.03,0,0,0,0,0,.26,.08,.03,.32,.01,0,.28,0,0,.01,.22,0,0,0,.63,.56,0,0,0,0,.01,.06,.04,.01,.13,0,.04,0,.01,0,0,0,0,.14,.01,0,0,0,0,.08,.24,0,.55,.59,.1,0,.09,0,.93,0,.1,.35,0,.7,.27,.45,0,.19,0,.12,0,.24,.15,.03,0,.04,.25,.69,.1,.17,.14,.02,0,0,0,.21,.4,0,0,.21,.25,0,.2,.83,.21,0,.47,.95,.01,0,0,.16,.28,0,0,.89,0,.14,.1,0,.14,.53,.07,.02,.63,.98,0,.21,0,.02,.37,.06,.18,.09,.01,.33,0,0,.88,0,0,0,.07,0,0,0,0,0,.86,0,.03,0,0,.29,.26,.52,.5,.91,0,.27,.04,.38,.73,.92,.44,.16,.21,0,0,.81,.55,.13,.73,.25,.59,0,0,0,0,.47,0,0,0,.08,0,0,0,0,0,0,.86,0,0,.67,.07,.02,0,.35,.47,.22,0,.85,.65,.2,.99,.03,.71,.3,.03,0,.07,0,.95,0,.56,.2,.64,0,.15,.93,.47,0,.07,.61,.77,.01,0,0,0,.05,0,.02,0,0,.42,.02,.82,.88,.16,.08,.24,.62,0,0,.07,0,.06,.16,.01,.86,.43,.23,.44,.69,.77,.11,.88,.22,.98,.43,.06,.28,.49,.13,0,.05,.18,.42,.06,.02,0,.28,.19,0,.92,0,0,.81,0,0,.54,.3,.76,.87,.48,.03,0,.96,0,0,.38,0,.4,.36,0,0,.85,.29,0,.22,0,.05,0,.81,0,0,.92,0,.01,0,.49,.16,0,.01,.89,.02,0,0,0,.03,.05,0,.56,0,0,0,0,.27,0,0,.95,0,0,.5,.02,.76,.54,0,.26,.43,.01,.08,0,.71,.1,0,.08,0,0,.49,.01,0,0,.28,0,.11,.02,0,0,0,.24,0,.27,.23,0,0,.4,.07,.03,.23,0,0,0,.01,0,.05,.3,0,.94,.08,0,0,.17,.81,0,0,0,.46,0,0,.31,.16,.81,0,.73,.88,0,0,.73,0,0,0,0,.79,.45,0,0,.57,0,.81,.67,.06,.89,0,0,.54,.08,0,0,0,0,0,0,.05,.18,0,0,0,.35,0,.57,0,.57,.67,.15,.45,.83,0,.23,0,0,.38,0,.09,.05,0,.28,0,.35,.1,0,0,0,.14,0,.58,0,0,0,.93,0,0,.68,0,.28,.02,.19,0,0,.11,0,0,.52,.56,0,0,.68,.57,0,.97,.01,0,0,.29,.54,0,.06,0,0,0,.76,.97,.71,0,0,0,.49,.57,.3,.78,.01,0,.4,0,.21,.12,0,.22,.99,0,0,.07,0,0,0,.7,.65,.94,0,.01,.02,0,.89,0,.76,0,.84,.08,.01,0,.01,.17,.51,0,.33,.01,.18,.21,.67,0,.45,.83,.18,.3,0,0,0,.97,.01,.66,0,0,0,0,0,.3,.55,.44,0,0,.35,0,.32,0,0,0,0,.26,.55,0,0,0,.26,.01,.21,.04,0,.02,.09,0,0,0,0,.63,0,.49,0,.1,.23,.12,.73,.98,0,.07,.01,.18,0,.41,.96,.88,0,.26,.23,0,0,0,0,.16,0,.02,0,.38,.21,0,0,.39,.21,0,.69,0,0,.77,0,0,.9,.24,0,.01,.02,.02,.01,0,0,.74,.06,.46,.58,.68,.1,.55,.96,0,0,.02,0,0,0,0,.09,.55,.48,0,0,.27,.25,.6,0,0,0,.11,0,0,.67,0,0,.03,.1,.52,0,.63,.33,.01,.96,.03,.18,.84,.11,0,.29,0,.09,.41,0,.08,.05,0,0,0,0,.35,.06,0,.21,0,0,.01,0,.77,.57,.98,.81,.98,.01,0,0,.17,0,0,0,0,.01,.59,.26,.65,0,.01,.22,0,0,.04,.83,.04,0,0,.09,0,.61,0,.03,0,0,0,.09,.04,0,.56,0,.87,0,0,.05,.27,0,.29,0,0,.08,.04,0,.27,.42,.33,0,.13,.64,0,0,0,0,0,0,.03,.01,0,.04,.84,0,.96,.47,0,.03,0,.04,0,0,0,.02,.05,0,0,.45,.04,.14,.02,0,0,0,0,.07,0,0,0,0,0,.01,0,0,0,0,.35,.06,0,.84,0,.56,0,0,.4,0,0,.02,0,0,.15,.07,0,0,0,.23,0,.01,0,.57,0,0,0,0,.36,0,.08,.26,0,0,.1,.95,0,0,0,.02,.01,0,0,0,0,.38,.03,.05,.19,.55,0,.21,.25,0,.91,0,0,0,0,0,.07,.14,0,.03,0,0,.08,.17,0,.01,0,0,0,0,.29,0,.01,0,.33,0,.57,.82,.71,0,0,.04,0,.59,0,.28,.11,0,0,0,0,0,0,.89,.6,.01,0,.77,.01,0,0,0,.01,0,.01,.51,0,.13,0,.11,.42,0,0,0,0,.76,0,0,0,0,.01,0,.14,0,0,.12,0,.36,0,0,.82,0,.18,.57,.41,.02,.03,.03,.03,.49,.3,.12,.07,.11,.77,0,0,0,.21,0,.01,.01,0,0,0,.83,.21,.17,0,.29,0,.16,.05,.02,.02,0,0,0,.03,0,0,.1,0,.99,0,0,.08,.01,.35,.7,.07,.3,0,0,0,0,.96,0,.02,0,.5,.14,.1,.54,0,.06,0,0,0,0,.85,0,0,0,.03,.03,.21,0,0,.37,.83,0,.18,.01,.2,.7,.14,.18,0,0,.12,0,0,.01,0,.01,0,0,.61,0,0,0,0,.02,0,0,0,0,0,.01,0,0,0,0,0,0,.02,0,0,0,0,.16,.12,.06,0,.84,0,.89,0,0,0,0,0,0,0,.23,0,.33,.09,0,.02,.17,.04,0,0,0,0,0,0,0,0,.11,.61,.23,.72,.56,.95,0,.05,.95,.19,0,.06,0,.05,.79,.64,.45,.05,.25,0,.89,.02,0,0,0,0,.04,.04,.04,.3,0,.11,.41,0,0,.01,.07,0,.34,0,.77,0,.43,0,0,.54,.03,.01,.26,1,0,.03,.32,0,0,0,0,.01,.44,0,0,0,.08,.15,.12,0,0,.79,0,0,0,0,.14,0,0,.22,.63,0,0,0,.85,0,0,.22,.28,.61,0,.01,.59,0,.01,.66,0,0,.51,.44,0,0,0,0,.92,.61,.89,0,.03,.61,.7,0,.34,0,0,0,.53,0,0,0,0,0,.9,.3,0,0,.03,.08,.97,.28,.26,0,0,0,0,.71,.01,0,.46,.12,.11,.1,0,.07,.17,.59,0,0,0,0,0,.42,0,.04,.02,.62,.55,.06,0,0,.14,0,0,0,0,.02,0,0,0,0,.9,0,0,0,0,0,.31,0,0,0,0,.75,0,0,0,0,0,0,0,.39,0,.16,0,.11,0,0,0,0,0,.36,0,0,.3,0,0,.3,0,0,.89,0,0,0,0,.15,.95,.46,.66,0,.15,0,0,0,.51,.05,.33,.62,.1,.3,.01,.31,.03,0,.14,.43,0];export{a as pvalData};
