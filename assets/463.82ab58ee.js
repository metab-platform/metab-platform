const a=[0,.02,0,.22,0,.18,.01,.03,.1,0,0,.48,.98,0,0,.29,.15,.72,.55,.27,.22,.04,.41,.01,0,0,.21,.16,.01,.38,0,.01,0,.54,.44,.22,0,0,0,0,.16,0,0,.95,.03,.05,.2,0,.41,.04,.25,.06,.02,0,0,.03,.02,.19,.02,0,0,0,0,.75,.56,.38,0,0,.06,.21,.13,0,.02,.06,0,.48,.07,0,0,.34,0,0,.5,0,.8,.48,0,.1,0,0,.39,.11,.34,0,.94,.17,0,0,.76,0,.34,0,0,.2,0,0,.31,.47,0,0,.13,0,.96,0,.97,0,.14,.15,0,0,.77,.45,.07,.49,.55,0,0,0,.52,0,.13,0,.68,.29,.38,.01,.93,.19,.44,.05,0,.12,0,0,.01,.22,.92,.77,0,.24,0,.15,1,.42,.11,.47,.93,.05,.01,0,.96,0,.38,0,.27,0,0,.14,.79,0,.03,.15,.41,0,0,.32,.36,.89,.27,0,.68,.89,.07,0,0,.16,.14,.86,.13,.1,.35,.8,0,0,0,0,0,.02,.04,.17,.15,0,0,.02,0,0,.51,.07,.13,.5,.07,0,.59,0,.18,.03,.49,.42,.52,.07,0,0,0,0,0,0,.3,.51,.01,.05,.88,.36,0,0,0,.05,0,.56,.08,.91,.02,0,.06,.09,.67,.01,.12,.91,.49,.85,.37,.91,0,0,0,.57,.03,.04,.31,0,.65,.49,.01,0,.09,0,.16,0,.77,0,.91,0,0,0,0,.24,.4,.08,0,.35,.25,.09,.04,0,.02,0,.84,0,.28,.96,.17,0,0,.18,.76,0,.46,0,.29,.35,.65,0,.56,.14,.29,0,.84,0,.46,.2,0,.71,.6,.02,0,.34,.59,.21,0,0,0,.67,0,0,.74,.06,0,.1,.66,.05,0,0,.11,.03,.04,.36,.35,0,.05,.13,0,0,.23,.29,0,0,.07,.22,0,.61,0,0,.56,.05,0,.01,0,.35,0,0,.02,.56,.09,.43,.22,0,.57,0,0,.67,.2,0,.34,.2,.01,.02,0,0,.61,.62,.93,.26,.8,.53,.26,0,.52,.71,0,0,0,.04,.76,.41,.58,0,0,.47,.09,.4,.93,.58,0,.05,.16,.12,0,0,0,0,0,0,.13,0,.29,.24,0,0,.21,.01,.44,0,.62,.06,.07,0,0,.03,.21,.02,.08,.14,0,.29,.44,0,.01,0,0,0,0,0,0,.08,.06,0,0,0,.17,0,.03,0,0,.75,.2,.38,.14,0,.41,0,0,0,0,.07,.62,.33,0,.34,0,0,.72,0,.04,.25,.43,0,0,.85,0,.13,0,0,0,.16,.07,.72,0,.05,0,0,.57,.33,.02,.23,0,0,.54,.7,0,.14,.16,.12,0,0,0,.15,.8,0,0,0,0,.92,0,.27,.12,.22,.8,.57,.06,0,.59,0,.37,.33,0,.02,.39,.02,.66,0,.48,.64,.03,.03,.02,.23,.06,0,.06,.1,.76,.03,.04,.57,.99,.47,.11,.71,0,.17,.17,0,0,0,0,.19,0,.05,.01,.27,0,.55,.24,.06,.16,.1,.46,.97,.25,.53,0,0,.43,.02,0,0,.18,.02,.04,.13,.56,.88,0,.82,0,0,0,0,.53,0,.16,.61,.64,0,.23,0,0,0,.18,.62,0,0,0,.68,0,.44,.36,.01,.49,.4,.51,0,.3,.9,.95,.77,0,.01,.38,.05,.62,.46,.05,.68,.58,.01,.11,.15,0,0,.98,0,.22,.06,0,0,0,.14,0,.38,.3,0,0,.38,0,0,.01,0,.06,0,0,0,.73,0,0,.5,0,.05,.63,.72,0,0,0,.5,0,.6,.17,.75,0,0,.04,.31,.25,.19,0,.12,0,0,0,.85,.13,.21,0,0,.37,.95,0,0,0,.01,.16,.46,.67,.63,.04,.01,.2,.7,0,0,0,.67,.01,0,.95,.96,.01,0,.04,.26,0,.26,.11,.62,.43,.27,.51,.04,.16,.37,.52,0,0,.86,0,0,.17,.06,0,0,0,.11,0,.54,.02,.88,0,.16,.06,.7,0,0,0,.98,.86,0,.06,0,.18,0,0,.71,.66,.83,0,.07,.95,0,0,.56,0,.25,0,0,0,0,0,.42,.99,.12,.24,.64,0,.04,.26,0,.12,.03,0,.08,0,.32,.48,0,0,0,0,.03,.61,.51,.02,.98,0,0,0,.3,0,0,0,0,.33,.32,0,0,0,0,.07,.04,.37,.66,.87,.12,0,.01,0,.42,0,.33,.12,0,.12,.93,.11,0,.9,0,.04,.36,.79,.15,.86,0,.29,.99,.38,.76,.29,.02,.85,.02,0,0,.39,.13,.02,0,.86,.26,.01,.28,.31,.27,.05,.42,.72,0,.4,.08,.92,.26,0,0,.84,.01,.32,.59,0,.07,.92,.01,.01,.75,.86,.34,.4,.48,.03,.58,.07,.15,.7,0,.05,0,0,.29,.38,.02,0,.06,0,0,0,0,0,.32,0,.68,0,0,.24,.42,.46,.71,.01,0,.43,.38,.07,.55,0,.79,.52,.49,0,0,.08,.55,.01,.85,.33,.26,0,0,0,0,.23,0,0,.16,.79,0,0,0,0,0,.01,.87,0,0,.07,.7,.98,0,.51,.07,.11,0,.47,.74,.09,.7,.39,.84,.9,0,0,.73,0,.88,0,.66,.09,.34,0,.16,.91,.81,0,.02,.62,0,0,0,0,.14,.8,.03,.24,0,0,.08,.09,.55,.39,.37,.02,.14,.05,.05,0,.02,.24,.05,.19,.83,.94,.41,.99,.09,.88,.79,.6,.96,.75,.48,0,.08,.52,.31,.13,0,.17,.91,.14,.42,.04,0,.15,.38,0,.03,.05,0,.95,.02,0,.63,.21,.32,.99,.85,.02,.01,.87,0,0,.23,0,.31,.23,0,.31,.79,.06,.45,.58,.02,.58,0,.45,0,0,.76,0,0,0,.22,.57,0,.71,.01,.52,0,.05,.72,.25,.22,0,.31,.2,.85,.11,0,.91,0,0,.16,0,0,.05,.23,.62,.95,.14,.21,.29,.23,.15,0,.74,.04,0,.28,0,0,.14,.39,0,0,0,0,0,.07,0,.15,0,.16,0,.78,.39,.01,0,.6,.23,.59,.52,0,.75,0,.21,0,0,.41,.01,.13,.07,0,.46,.16,.16,0,0,.09,.62,0,0,.52,.1,.02,0,.58,.61,0,0,.01,0,0,0,.01,.89,0,.68,0,.15,.76,.01,.16,.89,.01,0,0,.01,.25,0,.04,0,0,0,0,.73,.56,0,.04,0,.39,0,.93,0,.74,.2,.64,.88,.06,0,.26,0,0,.89,0,.31,.05,0,.53,0,.05,.08,0,0,.01,.68,0,.13,0,.01,0,.06,0,0,.32,0,.42,.23,.04,0,.19,.01,0,0,.96,.49,0,.01,.01,.02,.39,.03,.28,.25,.74,.47,.04,0,.19,0,0,0,.47,.16,.02,0,0,0,.06,.02,.66,.02,.01,0,.04,0,.13,.09,.47,.69,.23,0,.28,0,0,0,0,.18,.03,.36,.03,.22,.32,.16,.01,0,.29,0,.41,.43,0,0,0,.12,.03,0,.02,0,.67,.3,.08,0,.74,.53,.1,.85,0,0,0,.01,.24,.74,0,0,0,0,0,.09,.73,.4,0,.11,.47,0,.67,0,0,0,0,.56,.06,.05,0,0,.2,.38,.55,.78,.01,.97,.08,0,0,0,.04,.68,0,.15,.05,.3,.15,0,.16,.88,0,.03,.32,.02,0,.34,.96,.07,0,0,.12,.09,.18,0,0,0,.14,.4,.03,.95,.88,0,0,.04,.14,0,.36,0,.1,.2,.03,0,.97,.22,0,.02,.11,0,0,.11,0,.5,.03,.19,.99,.7,0,0,1,0,0,.92,0,.62,0,0,.03,.12,.48,0,.01,.85,.83,.41,0,0,0,.56,0,.02,.24,0,0,.91,.15,.89,0,.87,.64,.13,.21,.06,.82,.03,.59,0,.77,0,.1,.43,0,0,.09,0,.03,0,0,.8,0,.06,.03,0,0,0,0,.09,.12,.29,.66,.83,.01,0,0,.05,0,0,0,0,.76,.4,.63,.05,.88,.12,.11,0,0,.15,.04,0,0,.19,.01,0,.25,0,0,0,0,0,.83,.18,0,.71,0,.43,0,0,.19,.86,.01,.02,0,.04,.27,.22,0,.4,.16,.15,0,.31,.99,0,.17,0,0,0,.02,.08,.04,0,.02,.77,0,.48,.01,0,.07,0,.01,.46,.13,0,.06,.65,0,0,.02,.17,.37,.36,0,.13,.07,0,.24,.43,0,0,0,0,.41,0,0,0,.09,.92,.6,0,.28,0,.79,0,0,.03,.16,0,.01,0,0,.22,0,0,0,0,.88,0,.01,0,.61,0,0,0,0,.04,0,.58,.67,0,0,.01,.96,0,0,0,.18,.04,0,0,0,0,.25,.1,.26,.3,.57,0,.58,.98,0,.94,0,0,.03,0,0,.01,.62,0,.27,.01,0,.38,.37,0,.04,0,0,0,0,.07,0,.02,0,.98,.34,.63,.92,.6,.03,0,.04,0,.97,0,.99,.65,0,0,0,0,0,.88,.31,.51,.03,0,.65,.05,0,0,0,.9,0,.7,.52,0,.97,0,.5,.08,0,0,0,0,.84,0,0,0,.01,0,0,.12,0,0,.6,0,.51,0,0,.87,0,.17,.9,.08,.07,.14,0,.1,.21,.67,.34,.27,.78,.53,0,0,0,.74,0,0,0,0,0,0,.85,.01,.29,0,.67,0,.09,.02,0,.1,0,0,0,.34,0,0,.17,.02,.86,0,0,.06,0,.24,.47,.28,.76,.26,0,0,0,.09,0,.08,0,.02,.06,.13,.12,0,.38,0,0,0,0,.94,0,0,0,.35,.1,.4,.01,0,.4,.3,0,.67,0,.49,.35,.05,.87,0,0,.85,0,0,0,0,0,.15,0,.83,0,0,0,0,.63,0,0,0,0,0,.42,0,0,0,0,0,0,.83,0,0,0,.62,.79,.71,.9,0,.64,0,.05,0,0,0,0,0,0,0,.96,0,.29,0,0,.58,.13,.26,0,0,0,.09,.03,0,0,0,0,.99,.25,.71,.01,0,0,0,.59,.07,0,.74,0,.01,.31,.76,.78,.02,.08,0,.72,.89,0,.01,.02,0,.01,0,.01,.83,0,.26,.31,0,0,.01,.15,0,.37,0,.99,0,.64,.01,.02,.86,.01,.35,.04,.02,0,.88,.15,0,0,0,0,0,.16,0,.02,.01,.21,.11,0,0,0,.08,0,0,0,.04,.87,0,0,.36,.1,.02,.01,0,.68,0,0,.1,.32,.38,0,.14,.84,0,.54,.51,0,.17,.07,.76,0,0,0,.68,.98,.07,.39,0,0,0,.58,.14,.83,0,0,0,.94,0,0,0,0,0,.01,.81,0,0,.09,.19,.05,.1,.32,0,0,0,0,.52,.02,0,.83,.56,.14,.64,0,0,.67,.19,0,0,0,0,0,.19,0,.01,.06,.84,.66,0,0,0,.77,.01,0,.01,0,.92,0,.02,0,.17,.16,0,0,0,0,0,.5,0,.12,0,0,.71,0,0,0,0,0,0,0,.88,0,.04,.01,.17,0,0,0,0,0,.01,0,0,.44,0,0,.03,0,0,.44,0,0,0,0,.49,.65,.72,.05,0,.88,0,0,0,.37,.27,.42,.21,.14,.13,.01,.73,.21,0,.05,.05,0];export{a as pvalData};
