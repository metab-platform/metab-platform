const a=[0,0,0,.04,0,.28,.63,.04,0,.04,.11,.14,.36,0,.02,.19,.42,.88,.82,.95,.75,0,.64,.14,0,0,0,.26,.06,0,0,0,0,.9,.04,.39,0,0,0,0,.37,0,.16,.65,.19,.01,.88,0,.79,0,0,.32,.26,0,0,.01,.01,.85,0,0,.01,0,0,.79,.03,0,0,.01,.4,.55,.43,0,0,.03,0,.08,.64,.02,.05,0,.01,0,.84,0,.06,0,0,.99,0,0,.09,.56,0,.01,.17,.18,0,.02,.3,0,.77,0,0,.92,0,.12,.79,.65,0,0,.69,0,.25,0,.02,0,.09,0,0,0,.49,.01,.3,.8,.26,0,0,0,0,0,.28,.02,.61,0,.51,.84,0,0,0,.06,0,.42,0,0,.19,.35,.64,.52,0,.05,0,.27,.55,.26,.04,.5,.01,.09,.01,.02,.26,0,.34,0,0,.01,0,0,.41,0,.21,0,.08,.27,0,0,.64,.07,0,0,.06,.69,.65,0,0,.36,.61,.82,0,0,.16,.09,.51,0,0,0,0,.5,.39,0,0,0,0,.74,.01,.01,.21,0,.01,.47,.03,0,.06,0,.99,0,.55,.01,0,.32,0,0,.04,0,0,0,.05,0,.16,.09,.49,.74,0,.04,.18,.23,0,.17,.53,.3,0,0,.04,.01,0,.25,.81,.02,.68,.32,.35,.26,0,.11,0,.71,.1,.01,.48,0,.08,.06,.06,0,.59,0,.03,0,.22,0,.02,.01,0,0,0,.8,.11,0,0,.6,0,.5,.02,.03,0,0,.52,0,.73,.01,.95,0,0,.27,.15,.15,.04,0,.19,.01,1,0,0,.96,.64,0,.75,0,.12,.11,0,.79,.78,.17,.7,.01,.14,.01,.01,.01,0,.13,.01,0,.01,0,0,.96,.99,0,0,0,.07,.23,0,.94,0,0,.59,0,0,.18,.37,.98,0,0,.99,0,.1,0,0,.31,.66,0,.5,.01,0,.28,0,0,0,.05,0,.85,.2,0,.3,0,.03,.05,.29,.04,0,.29,.16,.1,0,0,.61,.01,.37,.42,.31,.07,.32,.05,.04,.26,0,0,0,.26,.64,.51,.47,0,0,.6,.82,.26,.08,.07,0,0,.04,.94,0,0,0,0,0,.04,.73,0,.98,.8,0,.02,0,.37,.34,0,.24,.82,.05,0,0,.58,0,.7,.07,.12,0,.37,.07,0,.16,0,0,0,0,0,0,.39,0,0,0,0,.05,0,.01,0,0,.39,.94,1,.01,0,.75,0,0,0,0,0,.77,.68,.03,.37,0,0,.56,0,.06,.76,0,0,0,.13,0,.11,0,0,0,0,0,.02,.01,.72,.01,.23,.5,.14,.65,.51,0,0,.05,.54,0,.17,0,.96,0,.01,0,.64,.43,0,0,0,0,.05,0,.04,0,.05,.49,.04,0,0,.08,0,.17,.84,0,.07,.01,.14,.43,0,.01,.04,.47,0,.1,.37,.05,.25,.22,.93,.58,.01,.88,.33,0,.46,.67,.43,0,.1,.38,0,0,.03,0,.59,0,.01,.11,.52,0,0,0,.08,.1,.98,.33,.87,.13,.96,0,.01,.28,.61,0,0,.54,0,0,.07,0,.84,0,.06,0,0,0,0,.19,0,.73,.93,.52,0,.07,0,0,0,.02,.15,0,0,0,.04,0,0,.02,.01,.83,.33,.21,0,.76,.14,.73,.89,0,.26,.6,.57,.71,.2,.62,.29,.1,0,0,.02,0,.2,.61,.08,.06,0,.34,0,0,0,.87,0,.1,0,0,.05,.97,0,.95,0,.81,0,.07,0,0,0,0,.96,.01,.43,.76,.57,0,.11,0,.1,.07,.78,.14,.04,0,0,0,.29,.94,0,0,.79,0,0,0,.93,.8,.17,0,0,.88,.02,0,0,0,.57,.33,.1,.82,.8,.12,.55,.76,.19,0,0,0,.04,0,0,.23,.85,.14,.83,.08,0,0,0,.02,.96,.11,.19,.02,.47,.5,.43,.21,0,0,.94,0,0,0,0,0,0,0,0,0,.38,0,.01,0,.2,.09,.47,.01,.13,0,.17,.04,0,0,0,.02,0,.03,.22,.03,0,0,.87,.74,.37,0,.06,.27,0,0,.59,.1,0,0,.85,.39,.5,.75,.02,0,.3,0,0,.02,.04,0,0,0,.05,.23,0,.07,0,0,.05,.04,0,0,.07,.01,.03,0,0,0,0,.11,.03,.07,.21,.43,0,0,0,.01,.01,.01,.64,.64,.65,0,0,0,0,.02,.44,.79,0,.84,.08,.05,0,.88,0,.16,.12,.72,.02,.4,0,.31,0,.99,.13,.12,.13,.79,0,.05,0,.23,.01,0,0,.43,0,0,.35,.23,0,0,.96,.76,.04,.08,.03,.04,0,0,0,.31,.01,.28,.14,0,.52,0,.05,.88,.91,.35,0,.84,.03,.25,.15,.84,.45,0,.03,.07,0,0,.05,.46,0,0,.03,0,0,0,0,0,.52,0,.78,.04,0,.92,.83,.42,.55,.05,0,.38,.01,.5,.03,.12,.14,0,.9,0,.01,.41,.06,.07,.22,.91,.48,.44,0,0,0,.28,0,0,.02,.09,0,0,0,0,0,0,.77,0,0,.21,.49,.12,0,.01,.2,.02,0,.61,.2,.06,.27,.06,.32,0,0,0,.14,0,.04,0,.81,0,.38,0,.07,.33,.76,0,.12,.65,.06,.43,0,0,.45,.23,.18,0,0,0,.11,0,0,.62,.06,.73,.76,.29,.16,0,.11,0,.07,.89,0,.92,.57,.4,.87,.75,.63,.79,.84,.8,.09,.1,.62,.11,.38,.72,0,.44,.81,.54,.33,0,.07,.21,.47,0,.11,0,0,.35,.02,0,.24,.91,.2,.02,.67,.6,0,.91,0,0,.11,.01,.52,.07,0,.06,.49,.97,0,.74,.24,.08,.03,.22,0,.07,.85,0,.02,.02,.05,.77,0,.71,.09,.32,0,0,.02,0,0,0,.84,0,.01,.04,0,.48,0,0,.09,0,0,.33,0,.55,.15,.01,.45,.04,.58,0,0,.63,.48,0,0,.37,0,.04,.02,0,0,.79,.02,.34,0,0,0,0,.79,0,.92,.75,0,0,.92,.07,.15,.59,0,.02,0,0,0,.01,.87,.01,.86,.94,.01,.04,.27,.01,0,0,.82,.4,0,0,.38,.47,.3,0,0,.35,0,0,.14,0,.53,.09,.02,.69,.01,.02,0,.22,.01,.15,.01,.75,.11,0,0,.16,0,0,.02,0,0,0,0,.05,.27,0,0,0,.07,0,.37,0,.03,.05,.14,.38,.27,.48,.61,0,0,.01,.04,.33,.2,0,.88,0,.18,.42,0,0,0,0,.03,.13,0,.01,0,.52,.02,.01,.04,0,.42,.64,.15,0,.1,.84,0,0,.48,.18,0,.16,.19,.24,.02,.79,.17,.02,.11,.01,.99,0,.28,0,0,0,.48,.34,.14,0,0,0,.93,.22,.04,.15,.02,0,.8,0,.12,.83,.04,.65,.09,0,.04,.14,0,0,0,.06,.11,.88,.27,0,0,0,.25,0,.58,0,.29,.41,.35,.04,0,.05,.6,0,.51,.06,.04,.07,.1,0,.5,.51,.66,.7,0,0,0,.89,0,.45,0,0,0,0,.01,.05,.39,.78,.01,.02,.41,0,.19,0,0,0,.02,.58,.18,.06,0,0,.48,.03,.58,.38,.31,.05,.13,.01,0,.2,.24,.74,0,.8,0,.35,.18,.89,.85,.82,0,0,.81,.43,0,.41,.17,.75,0,.46,.89,0,.18,.04,0,.03,.1,0,0,.13,.08,.13,0,.68,.12,.47,.89,0,0,.67,0,0,.09,.41,.06,0,.01,.16,.21,.02,.02,.86,.26,.85,.89,.67,.96,.01,.23,0,0,.97,.14,0,0,0,.08,.03,.26,0,.1,0,.94,.26,0,.01,.02,.03,0,.01,.57,0,0,.54,.51,.3,0,.46,.01,.73,.35,.46,.31,.57,.01,.7,.04,0,.43,.28,0,.4,.04,0,0,0,0,.47,0,0,.93,0,0,.21,0,.22,.83,.83,.03,.08,.98,.01,.09,.61,0,0,0,0,.24,.03,.31,.11,.02,.72,0,.01,0,0,.37,.39,.94,0,.17,.03,0,0,.04,0,.13,0,.93,.38,.19,.85,0,.63,.01,0,.03,.87,0,.94,0,0,0,.79,0,.48,.99,.39,.07,.45,.15,0,0,.04,0,0,0,.06,.02,0,.02,.63,0,.41,.35,0,.65,0,.02,.02,.01,0,.21,.2,.03,0,.18,.06,0,.61,0,0,0,0,.75,.01,0,0,0,0,0,0,0,0,0,.41,.01,0,0,0,0,0,0,.15,0,0,.12,0,0,.31,0,0,0,0,0,0,0,.01,.81,0,0,0,0,.3,0,.02,0,0,0,.08,.23,0,0,0,0,0,0,0,0,0,.06,.01,0,0,0,0,0,.07,0,.04,0,0,.07,0,0,.32,.86,.01,0,0,0,.62,0,0,.09,0,0,0,0,.2,0,.54,0,.1,.01,.49,.23,.1,0,0,.67,.03,.18,0,.57,0,0,0,0,0,0,.25,.04,.08,0,.51,.82,.46,0,0,0,.65,0,.3,.74,0,.08,0,.06,.77,0,0,0,0,.01,.01,0,0,0,.03,0,.01,.47,0,.97,0,.76,.01,0,.5,0,.32,.01,.35,0,.02,.01,0,.07,.86,0,.37,.09,.42,0,0,0,.83,0,.47,0,0,0,0,.94,.83,.07,0,.2,0,.12,0,0,0,0,0,.29,.52,0,0,0,0,.04,0,.01,.01,.05,.04,.66,.7,.43,0,.03,0,.21,.05,0,0,0,.24,.02,.47,.2,0,0,.02,0,0,0,.58,0,.2,0,0,.03,.88,0,0,.81,0,0,.26,.44,.29,.74,.11,.77,0,0,.67,0,0,.5,.01,.66,0,0,.06,0,0,0,.01,.07,.08,.08,0,0,0,.26,0,0,0,0,0,0,.01,0,0,0,.04,0,.54,.48,0,.19,0,.07,0,0,0,.01,0,0,0,.19,0,.38,.04,0,.15,.97,.44,0,0,0,0,0,.19,0,.01,.2,.68,.83,.44,.25,.19,.06,.6,.88,.17,0,.79,0,.08,.03,.16,.84,.04,.15,0,.1,.04,.15,0,.01,0,.13,.48,0,.94,0,.44,.01,0,0,.64,.29,0,.83,0,.64,0,.58,0,0,.38,0,.03,.19,.46,0,.58,.69,0,0,0,.25,.52,.46,0,0,0,.66,.24,.04,0,0,.06,.02,0,.01,0,.25,0,0,0,0,.04,0,0,.06,.02,.01,.05,.78,.12,0,.47,.61,0,.34,.53,0,.89,.62,.07,0,0,0,.04,.15,.53,.29,.03,.04,.01,.05,.01,.13,0,0,.02,0,.02,0,0,0,0,.15,.45,0,0,.14,.09,.51,.66,.46,0,0,.13,0,.04,.38,0,.85,0,.49,.2,0,.03,.67,.04,0,0,0,0,0,.94,0,.39,.47,.18,.17,.02,0,0,.01,.38,0,0,0,.51,0,0,0,.04,.4,0,0,0,0,0,.68,0,.64,0,0,0,0,.01,0,.31,0,0,0,0,0,.85,0,.59,0,0,0,0,0,.12,0,.01,0,0,0,.26,0,.03,.59,0,0,0,0,.01,.5,.01,.02,0,0,0,0,0,1,0,.38,0,.07,.71,0,.78,.2,0,.53,.02,0];export{a as pvalData};
