const a=[.73,.93,.12,.78,.08,.08,.2,0,0,.01,.59,.02,.9,0,.77,.53,.66,.29,.05,.24,.35,0,.06,.07,.12,0,0,.34,.2,0,0,0,.01,.04,.01,.34,.36,.56,.11,.32,.89,0,.08,.9,.11,.22,.1,.04,0,0,.08,.81,.1,.02,0,.24,.62,0,.81,0,0,.01,0,.66,.07,0,0,.09,.31,.99,.94,1,0,.04,.03,.53,.12,0,.93,0,.15,.01,.97,0,0,0,0,.78,.01,.23,0,.47,0,.45,.13,.29,.07,.04,.04,0,.77,0,0,.61,0,.62,.06,.03,.01,0,.12,0,.21,.84,0,.81,.48,0,.01,0,.89,0,.12,.74,.14,0,.12,.24,0,.28,0,.74,.88,0,.54,.2,0,0,0,.5,0,.16,0,0,.15,.42,.68,.63,0,.66,0,0,.87,.25,0,0,.15,.27,.58,.58,0,0,.13,0,0,0,.05,0,.04,0,.33,0,0,0,0,0,.57,0,0,.05,.45,.49,.1,.29,0,.13,.72,.44,0,.04,.75,0,.39,0,0,.26,0,.31,.86,0,.09,0,.12,.72,.17,0,.22,0,0,.58,0,.53,.21,.49,0,0,.87,0,0,0,0,0,.01,.02,0,.1,0,0,0,.01,.55,.66,.94,.42,.15,.14,.32,.2,.15,.33,0,.18,0,0,0,0,.46,0,.39,.86,0,0,0,.21,0,.37,.89,0,.18,.38,.96,.02,0,0,.01,0,.02,0,.27,0,0,.69,.13,.17,.05,.4,0,0,0,0,0,0,.07,.3,0,0,0,.27,0,0,0,0,0,0,0,.04,.19,.01,0,0,.39,.86,0,.86,.86,.06,.01,0,0,1,0,.46,.23,.18,.32,0,0,0,.17,0,0,.02,.15,0,0,0,.02,.65,.61,0,.09,0,.18,.91,0,.49,0,0,.18,0,0,.32,.11,.41,.49,.09,.97,0,.15,0,0,0,.16,0,.3,.07,0,.09,.01,.89,.02,.03,0,.01,.18,.93,.16,.1,0,.16,0,.35,0,.03,0,0,.39,0,.89,0,.76,.53,.74,.18,.77,.08,.13,.15,.08,.05,.01,.57,.51,.01,.03,.77,0,.68,.88,.46,0,.01,.02,0,0,.84,.28,.01,0,0,.1,.19,.84,0,.24,.84,0,.3,0,.36,.04,.4,0,.94,.17,.3,.36,.34,0,.03,0,.08,0,.19,0,.11,.42,.01,.07,0,0,0,0,.62,0,0,.61,0,.03,0,0,0,0,.36,.74,.15,0,.12,0,0,.02,0,.22,0,.62,.72,.72,.35,0,.05,.04,.25,.05,.94,0,.01,0,0,.31,0,0,.69,.2,0,0,.01,0,.02,.92,.56,.59,.02,.91,.23,.01,.07,.01,.77,.02,0,0,.46,0,.19,0,.31,.55,.01,.79,0,0,.02,0,0,0,0,0,0,0,.01,0,.21,.52,.64,0,.72,.85,.27,.47,0,0,0,.3,0,.26,0,0,.93,.04,.04,.19,0,.1,0,0,.3,0,0,.02,.7,0,.13,.04,.59,0,.17,0,0,.25,.47,.14,0,.02,0,.41,.86,.58,.4,0,.3,.05,.29,.01,.3,.07,.4,.83,0,0,.61,0,.7,0,0,0,.36,.3,0,0,.5,.67,.85,.09,0,0,.04,0,.48,0,0,.03,.01,.33,0,.96,0,0,0,.5,.7,.26,.78,.33,0,.96,.81,.55,0,.12,.46,0,.24,.01,1,0,.01,0,0,0,0,.74,.05,.04,0,.48,0,.03,0,0,0,0,0,0,.88,.24,0,0,0,.05,0,.2,0,0,.18,.01,.22,.04,.39,.5,.82,.79,.09,.12,0,.73,.39,.77,0,0,0,0,.49,.43,0,0,0,0,.04,.1,.35,.14,.19,.32,.01,0,0,.1,0,0,0,.76,.4,.27,.44,.09,.35,.08,.03,.02,.13,0,0,0,.22,.26,.31,.23,.47,.67,0,0,0,0,0,.62,.69,.06,.9,.44,.63,0,0,.46,.72,.02,.71,.07,0,.29,.12,.01,0,.05,.03,0,0,.63,.74,.64,.17,.52,.08,0,0,.92,.64,0,.88,.06,0,.76,0,0,0,.1,.38,0,0,.01,.05,.99,0,.03,.18,0,.81,0,.39,.01,.11,0,0,.03,.13,0,.08,0,0,.28,0,.17,0,.34,0,.42,0,0,0,.32,0,0,.02,0,.07,.01,0,.21,0,.94,0,.03,.26,.01,0,.2,0,0,0,0,.61,.88,.51,.05,0,0,0,.15,0,.47,.21,.32,.04,0,.42,.71,.11,.22,0,.16,.56,.23,.14,0,.03,.56,0,.15,0,.17,0,0,.01,.72,0,0,0,.05,0,0,.2,.85,0,0,.31,.23,.15,0,0,0,0,0,.05,.01,.19,.12,0,0,.26,0,0,.27,.38,.67,0,0,0,.99,.01,.16,.05,0,0,.61,0,.88,0,0,.23,0,0,0,.25,.02,0,.05,.88,.07,.84,.15,0,.02,.01,.69,.99,.79,.03,.6,0,.72,0,.1,0,0,.1,0,.01,.52,0,0,.45,0,.07,.93,.33,0,.17,.04,.28,.13,0,0,.34,.62,.02,0,.14,0,.29,0,.02,.11,.21,.01,0,0,.33,0,.15,.99,.85,0,.9,.06,0,0,.72,0,.96,0,.19,.01,.25,0,.62,0,.44,.2,.02,.02,1,0,.44,.02,.03,0,.28,.07,.01,0,0,.01,0,0,0,0,0,0,.54,.84,0,0,0,0,0,.87,0,.96,.28,.01,.38,.56,.69,.89,.51,.41,0,.28,.5,.54,.68,.03,0,0,0,0,.75,0,.18,.11,.91,0,.87,.03,0,.54,0,0,.45,.38,.08,0,.59,.63,0,.47,0,.36,0,.91,.64,0,.38,0,.96,.42,0,.58,.84,0,.05,0,0,.68,0,.61,.21,.04,.04,0,.01,0,.76,0,.22,0,0,0,0,.42,.35,0,0,0,.61,.02,0,.39,0,0,.01,.22,0,.68,.41,0,0,.09,.4,0,0,.87,.18,.01,0,.64,0,0,.03,0,.03,0,0,0,.01,.31,0,.09,.84,0,.3,.03,0,0,.99,0,0,.38,.18,0,.01,.06,.2,.03,.4,.05,.29,.22,.06,0,.09,0,0,.1,.53,.74,.16,0,0,.06,.06,.01,0,.98,0,0,.13,.05,0,.03,.28,.5,.29,0,.01,.54,0,.22,0,.15,.4,0,0,.56,0,.02,.15,.05,.02,0,0,0,.78,0,0,0,.88,.97,.47,0,.7,0,.23,.11,0,.41,.2,.23,.79,.1,.72,.89,0,.4,.03,.01,.67,.23,0,0,.01,0,0,.37,0,0,0,.12,.45,.95,0,.11,.26,.07,0,.95,0,.93,0,.18,0,.25,0,0,.12,.11,0,.83,0,0,0,0,.1,0,.91,.14,0,.05,.59,.59,.18,.79,.02,.05,.7,.12,.84,.42,.8,0,.08,0,.32,.52,0,.61,.13,0,0,0,0,.02,.47,.02,0,0,0,0,0,0,.94,.06,.53,0,.03,0,0,.29,.13,0,.75,0,.11,.04,0,.32,.69,.48,.49,.91,.15,.62,0,0,0,.02,0,.01,0,.01,0,.01,0,.01,.12,.17,.06,0,0,.09,0,0,.58,.26,.02,.79,.46,0,0,.64,.14,0,.16,.15,.01,0,.01,.67,0,.12,0,.09,.01,.01,0,.84,.93,0,.21,.7,0,0,.96,.13,.23,.05,.07,.23,0,1,.46,0,0,0,0,.06,0,0,0,.04,0,0,0,.6,.25,.03,0,0,0,.54,.01,.16,.14,0,.45,0,.43,.58,.44,.05,.49,.13,.1,.03,.43,0,.03,.52,.87,0,0,0,0,0,0,.27,.01,0,.28,.16,.22,0,.84,.03,.13,.03,.23,.1,0,0,.35,0,.01,.04,.05,.07,.76,.01,0,.01,.83,.42,.21,.74,0,.43,.76,.15,.51,.02,.21,.83,0,0,0,0,0,.89,.41,0,.88,0,.21,0,0,.3,0,.2,.03,1,.06,.93,.04,.36,0,0,0,.05,0,0,.95,.23,0,.88,0,0,0,0,.28,.84,.16,0,.05,.43,0,0,.82,0,0,0,.72,0,.01,.61,0,0,.17,0,.41,.29,0,.01,0,0,0,.86,0,.59,.93,.13,0,.82,0,0,0,.06,0,.08,0,.11,.21,0,.85,.3,0,.39,.86,0,.18,0,.83,0,0,0,0,.06,.43,0,.25,.66,0,.03,0,0,0,0,.85,0,.03,0,.37,0,0,.02,0,0,0,.05,0,0,.1,0,.08,0,0,.54,0,0,.47,0,0,.21,.06,.01,0,0,0,.08,0,.04,.16,.01,.08,0,0,.09,0,0,0,0,.24,0,.88,0,.01,0,0,0,.3,.05,.04,0,0,0,0,.04,0,.3,0,.08,.17,.21,0,.5,0,.08,.06,.82,.01,.54,0,0,.16,.75,.09,0,0,0,0,0,0,.08,0,.83,0,1,0,.9,.77,.6,0,.62,.54,.04,.04,0,.93,0,0,0,0,0,0,.02,.04,0,0,.56,.36,.97,0,0,0,.4,.01,.05,.14,0,0,0,0,.82,.25,.63,0,.02,0,.6,0,0,0,.52,0,.94,0,0,.21,0,.39,.15,0,.99,0,.1,0,.85,0,.12,.81,0,0,.35,0,.01,.12,.79,.01,.11,.2,0,0,.07,.99,0,0,.31,.49,.01,.03,0,.49,.09,.86,0,0,0,.32,.16,.02,.54,.09,0,0,0,0,.01,0,0,.47,0,.81,.35,.01,0,.44,0,.01,0,0,0,0,.14,.16,.86,.73,0,.07,.9,.1,.28,.28,.5,0,.6,0,0,.81,.95,.05,.25,.91,0,0,.01,0,.38,.6,.84,.28,0,0,.76,.09,.57,.11,.24,.01,0,0,.6,.01,.36,.01,.23,.88,.05,.02,0,0,0,.01,0,.15,.03,0,0,0,.08,0,.02,0,0,0,.05,.16,0,.15,0,.3,0,.64,0,.2,.57,.5,.01,.33,0,.03,.02,.01,0,.53,0,.04,.3,0,0,0,.21,0,.3,1,.61,.88,.09,.12,.14,.57,0,0,.04,.01,.77,.17,.79,0,.09,.31,.01,.36,.04,.99,0,.2,0,.1,0,.12,.01,.29,.47,0,.83,0,0,0,.19,.05,.01,.75,0,.3,.1,0,0,0,.59,.16,.3,.01,.93,.86,.09,.71,0,0,0,.15,.71,0,0,0,0,.07,.92,.39,0,.57,.24,.12,0,.21,0,.27,.01,0,0,0,0,0,0,.07,0,0,.62,.41,.6,.24,.88,.92,.01,0,.87,0,.81,.83,.82,0,0,.5,0,.94,.49,.64,.94,.03,.71,.45,0,.06,.28,.06,.45,0,.6,.95,.1,0,0,.11,0,0,0,0,0,.65,.25,.19,0,0,0,.15,0,.94,.82,.07,0,.32,.32,0,.72,.02,.49,0,.32,0,.1,0,.58,0,.76,0,.24,.09,0,0,.28,0,.68,0,0,.84,.98,.01,0,.01,0,.39,0,0,0,0,.11,.6,0,.05,0,.04,0,.01,.61,0,.01,.14,.01,.95,0,.13,0,0,.13,.06,.01,.02,.28,.02,.01,0,.56,.02,0,.18,.15,.63,.37,.87,0,.03,.02,0,0,.43,0,0,.05,0,.01,.01,0,.45,0,.8,0,0,.04,0,.02,.21,.1,.07,.53,0];export{a as pvalData};
