const a=[.03,.01,0,.93,0,.35,.35,0,0,.43,0,.92,.57,0,0,.23,0,.99,.02,.83,.78,.1,.09,0,0,0,.01,.12,.92,0,.19,.06,0,.8,0,.8,0,0,1,0,.12,0,.01,.38,.49,0,.05,.2,0,0,.02,.27,.04,0,.07,0,0,.08,.1,0,.31,0,0,.37,.01,.02,0,0,.32,.67,.96,0,.07,.93,0,.14,.35,.15,0,0,.05,0,.86,0,.66,.03,0,.32,0,0,0,.55,.45,0,.01,0,0,.26,.02,.21,.53,0,.88,.17,.6,.79,.48,.04,0,.39,.55,.01,.2,0,.84,0,.01,.18,.94,0,.16,.23,.01,.04,.04,.86,0,.14,.11,0,0,0,.45,0,0,.25,0,.15,.03,.93,0,.67,.25,0,.92,.24,.67,0,0,.81,0,.79,.74,.46,0,0,.35,.5,.94,0,0,.5,.75,.06,.97,.09,.03,.01,0,0,.98,.03,0,0,.14,0,.75,0,0,0,.02,.58,.07,0,.51,.02,.04,.99,0,.39,.2,.03,.51,.06,.02,0,.28,.05,.23,.62,0,0,0,.29,.02,.63,.05,0,.02,.02,0,0,.69,0,.13,.43,.68,0,0,.28,.73,.25,.98,0,.45,0,0,.04,.31,0,.61,.04,0,0,.09,.67,0,0,0,.32,0,0,0,0,.26,.01,.13,1,.16,.93,0,.48,.05,.17,0,.6,.94,0,.08,0,.1,0,0,0,0,.52,.15,0,0,0,.25,.23,0,0,0,.29,0,.02,0,0,0,.03,0,0,0,0,0,0,0,.23,.09,0,0,.04,.07,.01,0,.83,.76,.11,.82,0,.06,.67,.41,.2,.35,.68,0,0,0,.14,.33,.87,.95,.08,0,0,0,.52,.01,.33,0,0,0,0,0,0,.85,0,0,.44,.7,.9,.76,.54,0,.64,.54,.42,.51,0,.19,.66,0,0,.57,0,.03,0,.02,0,.33,0,.09,0,.3,.44,0,0,0,.4,0,.11,.67,0,.04,0,.07,.99,0,.15,.01,0,.29,.04,.49,0,.81,0,.34,.9,.3,.73,.35,.59,.54,.89,0,0,0,.31,.18,.68,.74,0,.73,.18,0,.06,.66,0,0,0,0,.23,0,0,.06,.22,0,0,0,0,.01,.94,.01,0,0,.02,.69,0,.5,.54,0,0,0,.89,.01,0,0,0,0,.79,0,0,.93,0,0,.02,.35,0,.07,.01,.25,.64,0,0,.12,.7,.01,.18,0,0,.83,.01,.01,0,0,0,0,0,0,.01,.13,.67,.01,.86,.03,0,.01,0,0,.03,0,0,0,.14,0,.04,.11,0,.01,.44,.13,0,.32,0,0,0,.09,.95,.63,0,0,0,0,.58,0,0,0,.01,0,0,0,0,0,0,0,.03,0,0,0,.01,.22,.18,.02,0,0,0,.59,0,.17,.11,.59,.79,.63,.45,.32,0,0,0,.17,0,.85,.49,.01,.04,0,.55,.09,0,.39,0,.08,.04,.01,0,0,.01,.02,0,0,0,.02,.24,.5,0,.84,.6,0,.05,.02,0,.64,.16,.06,.7,0,.77,0,0,0,0,0,0,.39,.13,0,.36,.03,.1,.15,.01,.8,0,0,.14,.84,0,.75,.48,.68,0,0,0,0,0,.52,.63,0,0,0,.15,0,.01,0,.97,.13,0,.53,0,.05,.04,0,.94,0,.01,.23,.75,0,0,.1,.37,0,.86,.58,0,.03,0,.7,.6,.39,0,.12,.85,0,0,0,.07,.02,0,.97,.29,0,0,0,0,.95,.57,.16,0,0,0,0,.38,0,.34,.01,.78,0,.01,0,0,.06,.89,.51,0,0,0,0,.34,.62,0,.46,0,.02,0,.03,.6,.59,0,0,0,0,.76,0,0,0,0,.54,.01,0,.14,.29,.24,.01,.45,0,0,0,.18,.35,0,.42,.53,.46,0,.78,0,0,0,.15,.87,.04,.8,.75,.13,.64,.38,.16,.01,0,.86,0,0,.16,.03,.61,0,.03,.16,0,.25,.42,0,0,.37,.58,.04,0,0,.57,0,.96,.11,.01,0,.01,.33,.88,.25,.95,.31,0,.12,.44,0,0,.39,.04,.17,0,.25,0,0,0,.01,.01,.78,0,0,0,.7,0,.54,.06,.1,0,0,0,.41,.95,.01,0,.38,.03,.06,.39,.02,.36,0,.17,0,0,.03,0,.09,0,.3,.94,.24,.03,0,0,.06,.02,.08,0,.8,.47,0,0,.36,.15,0,0,0,.23,0,.14,.01,0,0,.34,0,.64,.77,.58,.29,0,0,0,.09,.12,.17,.18,.09,.22,.04,.28,0,.14,0,0,0,.01,.07,.69,.05,.21,0,.03,.74,.86,.17,0,0,.38,.01,.02,0,.4,.01,0,0,.61,.63,0,0,0,.42,.11,0,0,0,.42,.06,.92,.97,.01,0,.33,0,0,.18,0,.11,0,0,0,0,0,.05,.02,.32,.02,.01,0,0,.03,.77,.59,.29,.91,0,.05,0,.16,0,.62,0,.01,0,.01,.19,.35,0,0,.7,0,.56,0,0,0,0,.68,0,0,0,.02,0,0,0,0,0,.02,.26,.03,0,.05,.09,0,0,0,.06,.09,0,.09,.05,0,.34,0,.3,0,.01,0,0,0,.31,0,.02,.01,.58,.08,.96,.22,.18,0,.45,.8,0,0,0,0,.01,0,0,0,0,0,0,.4,.01,.6,0,0,.31,.29,.17,.38,0,0,0,.74,0,.09,.86,.43,.36,.38,.08,.91,.39,.06,0,.77,.4,.29,.89,.04,.44,.01,.02,.01,.01,.05,0,0,.5,0,.04,0,.11,.36,0,0,.84,.13,.9,0,.97,.29,0,.68,.8,0,.04,0,.8,0,0,0,.02,.96,0,.37,.05,.88,.01,0,0,.47,.08,.02,.25,.18,.08,0,0,0,.53,.85,0,0,.26,.01,0,0,.13,0,.09,.45,0,.89,.04,0,0,.19,0,.76,.24,.5,.08,.08,.11,.77,.01,.13,0,.89,0,0,.37,0,.14,0,.01,0,0,0,.64,0,0,0,.01,0,.77,0,.1,.5,0,.03,.45,.27,.35,.04,0,.01,0,.84,0,.41,.12,.73,.79,.9,0,0,.32,0,0,0,.02,.2,0,0,0,.98,0,0,0,.34,.01,0,.8,0,0,0,.3,.91,.2,.03,0,.2,0,.94,0,.72,.76,0,.01,.05,.01,0,.54,0,0,0,.98,0,.04,0,0,.53,.03,0,.41,0,.67,0,.19,.45,0,.11,.57,0,0,.78,0,.02,.06,0,.77,0,.31,.13,0,.03,.07,.06,.01,.25,0,0,.09,0,0,0,0,0,.02,.25,0,0,0,.05,0,0,0,.02,0,0,.75,.99,0,.93,.01,0,0,.02,0,0,.59,0,0,0,.47,.42,.82,0,0,0,.03,.91,.79,.14,.37,0,.57,0,.38,0,0,.05,.13,.52,.03,0,0,0,0,.13,0,.27,.26,.02,.05,.2,.41,0,.1,0,0,.38,0,.01,.32,0,.19,.87,.08,0,0,.01,.86,0,.04,.5,.79,0,0,0,.91,0,0,.23,0,.01,.66,0,.01,.08,.62,.19,0,.1,0,0,.04,.06,0,0,.43,0,.09,.06,0,0,.83,.12,0,.01,0,0,0,0,0,.01,.09,.61,0,0,.55,0,.06,0,.04,.68,.01,.12,.01,.38,0,.01,.55,.03,.9,.54,.06,.04,.01,.07,.01,.07,.09,0,0,0,0,.06,.04,.18,.06,0,.02,.04,0,.95,.4,.12,.47,.54,0,0,.66,0,0,.65,0,.27,0,0,.85,.01,0,.31,.87,.29,0,0,.06,0,.02,0,0,0,.01,0,.37,0,.14,0,0,.01,0,.66,.01,.76,.02,.01,0,.89,.01,0,0,.06,.18,.76,.88,0,.89,.35,.08,.01,.37,0,.4,.36,0,.94,.01,0,0,0,0,.43,.59,.05,.21,.01,0,0,0,.88,0,.94,.58,.75,0,.03,0,.16,0,0,0,0,0,.15,.52,.67,0,0,.08,.16,0,.81,.04,0,.01,0,.53,0,.02,0,.84,.15,.04,.19,.05,0,.01,.18,.96,0,0,.01,.76,.51,.15,0,0,.39,0,.03,.76,.99,.95,.96,0,.88,.77,0,0,.01,.88,0,.1,0,0,0,.01,.01,.02,.02,.17,0,.07,.44,0,0,0,.17,.09,.05,.71,0,.87,.43,0,0,0,0,.33,.02,.55,0,0,.19,0,0,0,0,.1,0,.11,0,0,.05,.01,.19,.92,.04,0,.39,0,.01,0,.01,.43,.08,.92,0,.07,.21,0,.04,.29,0,.66,0,0,0,0,.97,0,0,.13,.89,0,0,.67,0,.06,.17,.19,.12,0,0,0,0,.01,.22,0,.04,0,0,0,.31,0,.76,.79,.53,.75,0,0,.74,.35,0,.67,.3,0,0,.44,.01,.34,.01,.31,.07,.01,.45,0,.3,.42,.03,0,.55,.08,.66,.4,0,.43,0,.18,.06,.24,0,0,0,.12,0,0,0,.01,.01,0,.05,.96,.23,.01,.26,0,0,0,0,.73,.43,.01,.96,0,.47,0,0,0,0,0,0,.14,.48,.16,0,.85,0,0,.08,.91,.01,.8,0,.05,.38,0,.41,.58,0,.02,.21,0,.07,0,.82,.01,.73,.49,.89,0,0,0,0,.02,0,0,0,0,0,.36,.17,0,0,.71,.29,.26,.08,.25,0,0,0,0,.59,0,.31,.02,.05,0,.01,0,.01,.09,.07,.68,.56,.25,0,0,.52,0,0,.94,.01,0,.93,.12,0,.38,0,.95,0,.01,0,0,.39,.27,0,0,.01,.09,.97,0,0,.05,.01,.03,.63,0,.89,.7,.09,.33,.23,.08,.01,0,0,.02,0,0,.04,.69,.44,0,0,0,0,0,.01,.11,.19,.25,.85,.55,0,0,0,.97,.1,.49,.03,.17,0,0,0,0,.01,.18,0,.07,.22,.89,0,0,0,0,0,0,0,.49,.09,.74,.27,0,0,.22,0,0,0,.03,.95,0,0,.02,0,.93,.39,.55,.06,.91,.64,0,0,.55,.09,0,.02,0,.26,0,.06,.71,.43,.5,0,.44,0,0,0,.26,.01,0,0,.59,.37,0,.07,0,.06,.36,0,.28,0,.13,0,.44,0,.02,.04,0,.43,0,.49,.66,.85,0,.22,.19,.02,0,0,.05,.03,.04,0,0,.61,.68,.83,.76,0,0,.01,0,0,.02,.03,.8,0,0,.01,0,.71,.27,.1,.99,.61,0,0,.4,.4,0,.04,.01,0,0,.28,.04,.06,.12,.07,0,.66,0,0,.75,.01,.82,0,.18,.87,.22,0,.05,0,0,0,0,0,0,0,0,0,.09,.19,.67,0,0,0,.78,.14,.2,0,0,0,0,.58,0,0,0,.07,.65,.16,.64,.45,.02,.47,0,0,0,0,.12,.23,.28,.01,0,.33,.33,.01,0,0,.03,.1,0,.04,0,0,0,.01,0,.08,.01,0,0,0,0,0,.09,.01,.77,.01,0,.02,.1,0,0,0,0,0,0,.01,0,0,.01,.7,0,0,0,0,0,0,.04,0,.08,0,0,.81,0,0,.68,.06,.41,0,0,.12,.14,0,0,0,0,0,.08,.02,0,0,.53,.05,.29,.14,.02,.06,.01,0,.74,.89,.99];export{a as pvalData};
