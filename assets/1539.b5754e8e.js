const a=[.19,.06,0,.91,0,.03,.09,0,.02,0,.86,.29,.57,0,.59,.28,.26,.95,.03,.45,.33,0,.02,.29,0,0,0,.75,0,0,0,0,0,.03,.02,.05,0,.74,.02,.12,.37,0,0,.97,.26,.47,.05,.01,0,0,.02,.34,.53,0,0,.6,.58,0,0,0,0,0,0,.8,.38,0,0,.73,.35,.51,.92,.17,0,.08,0,.65,.01,0,.03,0,0,0,.75,0,.01,0,0,.52,0,.01,0,.38,0,.01,.21,.3,0,.02,.48,0,.3,0,0,.58,0,.8,0,.01,0,0,.92,0,.85,0,.03,0,.59,0,0,0,.89,0,.02,.92,.04,0,0,.84,0,0,0,.91,.87,0,.95,.55,0,0,0,.29,0,.06,0,0,.1,.4,.73,.03,0,.47,0,0,.5,.81,0,0,.98,.44,.09,.92,0,0,.19,0,0,0,.05,0,.01,0,.31,0,0,.03,0,0,.31,0,0,0,.08,.8,.1,.31,0,.13,.94,.05,0,.21,.63,0,.83,0,0,0,0,0,.77,0,.07,0,0,.72,0,0,.15,0,0,.77,0,.53,.38,.01,0,0,.86,0,0,0,0,0,0,0,0,0,0,0,0,0,.45,.8,.16,0,.99,.14,.89,.05,.03,.4,0,.96,0,0,0,0,.5,.02,.57,.91,0,0,0,.02,0,.14,.44,0,.07,.06,.57,0,0,0,0,0,0,0,.94,0,0,.02,0,0,0,.75,0,0,0,0,0,0,.05,.01,0,0,0,.01,0,0,.01,0,0,0,0,0,.77,.01,.01,0,.28,0,0,.58,1,0,.82,0,0,.49,0,.99,.09,.1,.01,0,0,0,0,0,0,.16,.62,0,0,0,0,.25,.74,0,0,0,.2,.7,0,.2,0,0,.37,0,0,.01,.05,.64,0,0,.31,0,.01,0,0,0,.1,0,0,.02,0,.3,0,.01,.01,.13,0,.01,.31,.01,0,0,0,.34,.01,0,.06,.01,0,0,.14,0,.76,0,.8,.83,.75,.23,.7,0,.18,.66,0,0,0,.77,.67,.06,.28,0,0,.4,.07,.09,.01,0,0,0,0,.82,.58,0,0,0,0,0,.97,0,.02,.87,0,.02,0,.02,.02,0,0,.74,.03,0,0,.59,0,.39,0,.03,0,.1,0,0,.69,0,0,0,0,0,0,.96,0,0,.01,0,.32,0,0,0,0,.06,.21,.04,0,0,0,0,0,0,0,0,.07,.2,.19,.38,0,0,.01,0,0,.83,0,0,0,0,0,0,0,.05,0,0,0,0,0,.02,.07,.01,.62,.34,.79,.34,0,0,0,.26,0,0,0,.01,0,.02,0,.69,.05,0,.01,0,0,.01,0,.01,0,0,0,0,0,0,.03,0,.45,.71,0,.62,.35,.01,.59,0,0,0,.82,0,.33,0,0,.11,0,.62,.54,0,.19,0,0,.13,0,0,0,.06,0,0,0,.01,0,.19,0,.01,.01,.54,0,0,0,0,.99,.45,.74,.65,0,.38,0,0,.02,.65,0,0,.5,0,0,.45,0,.21,0,0,0,.38,0,0,0,.01,.67,.5,.44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.47,.25,.23,.04,.09,0,.59,.76,0,0,.12,.89,0,.33,0,.87,0,.02,0,0,0,0,.32,0,0,0,0,0,0,0,.01,0,0,0,0,.71,.1,0,0,0,.82,0,.11,0,0,0,0,.56,.97,.07,.62,.97,0,0,0,0,.53,.17,.87,0,0,0,0,.67,.07,0,0,.01,0,0,.01,.17,.41,0,.48,0,0,0,0,0,0,0,.96,.59,0,.14,.09,.34,.03,.05,0,0,0,0,0,0,.31,.07,.13,.08,.96,0,0,.01,0,0,.86,.95,.12,.16,.1,.33,0,0,.01,.82,0,.13,.01,0,.06,0,0,0,0,.65,0,0,.01,.68,.67,1,.63,0,0,0,.71,.08,0,.05,.02,0,.34,.02,0,0,0,.14,.29,.33,0,.09,.22,0,0,0,.79,.01,0,.41,.01,.05,0,0,0,.11,0,.01,0,0,0,0,0,.01,.57,0,0,0,0,0,.67,0,0,.01,0,.36,0,0,0,0,.06,0,.2,.02,0,0,.01,0,0,0,0,.34,.66,.71,0,0,0,0,0,0,.81,0,.29,.12,0,.01,.37,0,.03,0,.03,.44,.01,0,0,.1,.83,0,.38,0,.08,0,0,0,.83,0,0,0,.02,0,0,.05,.42,0,0,.67,.58,.14,0,0,0,0,0,0,.24,.01,0,0,0,.18,0,0,.66,.36,.74,0,0,0,.06,0,.12,.02,0,0,.49,0,.03,.02,0,0,0,0,0,.02,0,0,0,.86,0,.58,0,0,.05,.03,.98,.49,.57,0,.33,0,.69,0,.16,0,0,.05,0,0,.47,0,0,.65,0,.13,.16,0,0,0,.03,0,0,0,0,.01,.06,0,0,0,0,.72,0,0,.19,.22,0,0,0,.74,0,0,.87,.26,0,.75,.02,.43,0,.54,0,.34,0,.21,0,.66,0,.56,0,.06,.56,0,0,.48,0,.22,.19,0,0,.34,0,0,0,0,0,0,0,0,0,0,.06,.4,.8,0,0,0,0,0,.62,0,.7,.17,.11,.67,.62,.79,.27,.72,.38,0,.17,.28,.33,.79,.03,0,0,0,0,.37,0,.57,0,.87,0,.73,.01,0,.51,0,0,.36,.33,.19,0,.36,.11,0,.75,0,0,0,.13,.94,.01,0,0,.81,.69,0,.91,.1,.02,0,0,0,.04,0,.05,.07,.01,.04,0,0,0,.57,.08,0,0,0,0,0,.01,.71,0,0,0,.01,.62,0,0,0,0,0,.13,0,.67,.85,0,.02,.11,.25,0,0,.42,.76,0,0,.03,0,0,0,0,0,0,0,0,.02,0,0,0,.16,0,.44,.04,0,0,.48,0,0,.25,0,0,0,.01,.95,.01,.38,0,.95,.91,.98,0,.03,0,0,0,.23,.89,0,0,0,.01,.03,0,.01,.76,0,0,.13,0,.05,0,.92,.22,.59,0,0,.86,0,.17,0,.03,.37,0,0,.69,0,0,.03,0,0,0,0,0,.88,0,0,0,.72,.05,.99,0,.68,0,.25,.93,0,.01,.1,0,.03,.96,.01,.21,.02,.59,.96,0,.41,.2,0,0,0,0,0,.87,0,0,0,.14,0,.02,0,0,.16,.03,.04,.04,0,.43,0,0,0,.31,0,0,.1,.1,0,.78,0,0,0,0,.05,0,.29,0,0,0,.37,.97,.15,.02,0,0,.68,.11,.91,.3,.03,0,.16,0,.92,.08,0,.7,.34,0,0,0,0,0,0,.31,0,0,0,0,0,0,.9,0,.51,0,.01,0,0,0,.02,.04,.64,0,.07,.02,0,.18,.79,0,.39,.67,.2,.01,0,0,0,0,0,.62,0,0,0,0,0,.27,.11,.15,1,0,0,0,.01,0,.01,0,0,.44,.9,0,0,0,.04,0,.06,.11,.45,0,0,.04,0,0,0,.28,0,.02,0,.3,.55,0,.24,.8,0,0,.37,.02,.96,0,.23,.17,0,.64,.29,0,0,0,0,.01,0,0,0,.05,0,0,0,.63,.15,.61,.01,0,0,.81,0,0,.02,0,0,0,.57,.41,.38,0,.84,.09,.1,0,.2,0,0,.93,.72,0,0,0,0,0,0,0,.1,0,.42,0,.01,0,.56,0,0,0,.81,.07,0,0,.7,0,0,0,0,.18,.05,.06,0,.01,.49,.59,.27,.69,0,.36,.76,0,.2,.03,0,.65,0,0,0,0,0,.48,.15,0,.19,0,.49,.01,0,.27,0,.58,.19,.87,0,.1,.94,.7,0,0,0,0,0,.01,.52,.16,0,.25,0,0,0,.02,.61,.16,0,0,.02,.99,0,0,.07,0,0,0,.45,0,0,.65,0,0,0,0,.25,.65,0,.01,0,0,0,.25,0,.31,.88,.09,0,.69,0,0,0,.01,0,0,0,0,.13,0,.19,.07,0,.47,.8,0,.9,0,.86,0,0,0,0,.01,.04,0,.48,.31,0,0,0,0,0,0,.44,0,0,0,0,0,0,0,0,0,0,.02,0,0,.34,0,.02,0,0,.35,0,0,.63,0,0,.36,.15,0,0,0,0,0,0,.65,.78,0,0,0,0,.07,0,0,0,0,.8,.01,.79,0,0,0,0,0,.96,0,0,0,0,0,0,.07,0,.05,0,.09,.02,.67,0,0,0,0,0,.16,.58,0,0,0,0,.66,.69,0,0,0,0,0,0,.09,0,.22,0,.58,0,.61,.77,.54,0,0,.22,0,.37,0,.94,0,0,0,0,0,0,0,.23,0,0,.02,.77,.14,0,0,0,.03,0,0,.44,0,0,0,0,.92,0,0,0,0,.01,.03,0,0,0,.13,0,.4,.24,0,.21,0,.48,0,0,.92,0,.13,0,.31,0,.06,.85,0,0,.39,0,.05,.02,.95,0,0,.76,0,0,.32,.76,0,0,0,.84,.34,0,0,.51,0,.23,0,0,0,0,0,.58,.06,0,0,0,0,0,0,0,0,.09,0,.83,.21,.01,0,0,0,0,0,0,0,0,.19,.1,.65,.42,0,.16,.01,.01,0,0,.91,0,.15,0,0,.58,.29,0,.03,.45,0,0,.04,.19,.22,.84,.44,.87,0,0,.77,0,0,.84,0,.04,0,0,.6,0,0,0,.08,.24,0,0,0,0,0,.03,0,0,0,0,0,0,.17,0,0,0,0,0,.01,.08,0,.25,0,.65,0,0,0,0,0,0,0,.52,0,.19,.03,0,0,.37,0,0,.01,0,0,0,0,0,0,.74,.99,.25,.33,.09,.13,.2,.09,0,.02,0,.22,0,.38,0,.07,.79,.08,.18,0,.75,0,0,0,0,0,.13,.17,.26,.53,0,.63,0,0,0,0,.03,0,.41,0,.58,0,0,0,0,.54,.02,.02,.48,.94,.08,.05,.13,0,0,0,0,.03,.01,0,0,0,.04,.64,.91,0,0,.09,0,0,.03,0,0,0,0,0,0,0,0,0,.19,0,0,.56,.54,.46,0,.65,.52,0,0,.64,0,.06,.76,.53,0,0,.23,0,1,.81,.98,.06,0,.91,.71,0,.03,0,0,0,0,.02,.01,0,0,0,.12,.01,0,0,0,.05,.78,.43,.29,0,0,.05,0,.08,.15,.01,.02,0,.23,0,0,.32,0,.72,0,0,0,0,0,.68,0,.48,.02,.07,.25,.04,0,0,0,.02,0,0,.13,.28,0,0,0,0,.39,0,0,0,0,0,.52,0,0,0,0,0,0,0,0,0,0,0,.08,0,0,.01,0,.01,0,0,0,0,0,.02,0,.19,0,0,0,.1,0,.77,.85,0,0,0,0,.02,.43,0,0,0,0,0,0,0,.08,0,.72,0,0,.07,0,.13,.05,0,.03,.56,0];export{a as pvalData};
