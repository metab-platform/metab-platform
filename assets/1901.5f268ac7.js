const a=[0,0,0,.42,0,.97,.01,.76,0,.08,0,.8,.8,0,0,.72,.01,.67,.33,.97,.42,0,.42,0,0,0,0,.05,0,.06,0,0,0,.41,.67,.04,0,0,0,0,.44,0,0,.86,.09,0,.37,.04,1,0,.27,.55,0,0,0,0,0,.22,0,0,0,0,0,.68,.1,.04,0,0,.58,.85,.48,0,0,.01,0,.6,.41,0,0,.07,0,0,.29,0,.06,0,0,.9,0,0,.14,.35,.04,0,.82,.81,0,.04,.28,0,.52,0,0,.42,0,.18,.87,.71,0,0,.7,0,.47,0,.25,0,.78,.06,0,0,.84,.09,.05,.48,.89,0,0,0,.1,0,.44,0,.25,.06,.01,.79,.11,0,.12,.24,0,.82,0,0,.93,.17,.74,.85,0,.04,0,.26,.95,.58,.95,.26,.35,.98,.01,0,.91,0,.56,.01,.07,0,0,.01,.63,0,.84,.02,.8,.01,0,.09,.88,.74,.01,0,.38,.3,.43,0,0,.92,.52,.06,.14,.01,.35,.45,.27,0,0,0,0,.15,.91,0,.02,0,0,.85,0,0,.44,0,0,.99,.36,0,.51,0,.26,0,.8,.56,.13,.19,0,0,0,0,0,0,.83,.12,0,.03,.65,.52,0,0,.28,.5,0,.32,.35,.76,0,0,.77,.84,.09,.05,.42,.1,.17,.45,.35,.24,0,.03,0,.69,.63,.01,.35,0,.22,.2,.01,0,.75,0,.04,0,.9,0,.96,0,0,0,0,.74,.55,0,0,.81,.03,.14,.01,0,0,0,.42,0,.29,.19,.11,0,0,.23,.48,0,.18,0,.89,.19,.92,0,.03,.1,.28,0,.89,0,.25,.3,0,.44,.24,.96,.02,.21,.33,.11,0,.01,0,.74,0,0,.51,0,0,.07,.78,0,0,0,.02,.17,0,.89,.04,0,.05,0,0,0,.02,.61,0,0,.84,0,0,0,0,.12,.13,0,0,0,0,.63,0,0,0,.32,.01,.74,.26,0,.01,0,0,.06,.29,.01,.01,.29,0,.01,0,0,.9,.02,.19,.46,.52,.15,.43,0,.15,.75,0,0,0,.67,.57,.1,.04,0,0,.1,.06,.67,.08,.06,0,0,.02,.51,0,0,0,0,0,0,.09,0,.18,.33,0,0,.02,0,.37,0,.76,.8,.04,0,0,.31,.04,.03,.38,.16,0,.52,.92,0,0,0,0,0,0,0,0,.97,.01,0,0,0,.84,0,.01,0,0,.27,.29,.36,.04,0,.35,0,0,0,0,0,.69,.34,0,.07,0,0,.45,0,0,.45,.02,0,0,.91,0,.12,0,0,0,.02,.01,.09,0,.05,0,0,.67,.76,.05,.13,0,0,.38,.51,0,.85,0,.1,0,0,0,.31,.63,0,0,0,0,.09,0,.3,0,.06,.41,.24,0,0,.41,0,.94,.6,0,.94,.01,0,.58,0,.06,.53,.14,.96,1,.42,.06,.01,.03,.18,.76,.03,.38,.55,.41,.3,.25,.53,0,.01,.28,0,0,0,0,.32,0,.89,0,.91,0,.35,0,.46,.73,.08,.36,.82,.14,.26,0,0,.49,.18,0,0,.22,0,.01,.01,.28,.14,0,.02,0,0,0,0,.9,0,.1,.77,.75,0,.49,0,0,0,0,.53,0,0,0,.03,0,.02,.06,.01,.14,.03,.39,0,.78,.46,.26,.88,0,.06,.92,.47,.48,.71,.12,.37,.29,.03,0,.04,0,.01,.17,0,0,.01,.01,0,0,.6,.14,0,.1,0,0,.15,.28,0,.08,0,.5,0,.14,0,.16,0,0,.87,0,.43,.38,.82,0,0,0,.08,0,.16,.24,.05,0,0,0,.93,.31,.03,0,.17,0,0,0,.17,.76,.21,0,0,.76,0,0,0,0,.02,.23,.06,.98,.2,.5,.01,.01,.06,0,0,0,.73,0,0,.96,.9,.06,0,.2,.01,0,.76,.04,.85,.25,.18,.49,.15,.09,.32,.76,0,0,.23,0,0,0,0,.01,0,0,0,0,.93,0,.18,0,.05,.05,.66,0,0,0,.88,.71,0,0,0,.24,0,.15,.71,.08,0,0,.94,.84,0,0,.38,.03,.04,0,.1,0,0,0,.23,.3,.09,.47,.21,0,.65,.01,0,.05,.58,0,.01,0,.41,.68,0,0,0,0,.01,.57,.05,0,.4,0,0,0,.01,0,0,.02,0,.67,0,.01,0,0,0,.01,.05,.02,.83,.64,.33,0,0,0,.34,0,.65,.09,0,.48,.04,.35,0,.6,0,.36,.09,.96,.05,.63,0,.44,.14,.55,.43,.17,.26,.05,0,0,0,.8,.87,0,0,.29,.14,0,.71,.72,.05,0,.28,.57,.01,.04,.19,.19,.19,0,0,.51,0,.36,.95,0,.53,.01,.25,.09,.46,.65,.01,.63,.1,0,.41,.45,.28,.11,0,.08,0,0,.61,.12,0,0,.28,0,0,0,0,0,.67,0,.09,0,0,.38,.72,.45,.98,.69,0,.19,.07,.88,.73,.28,.98,.15,.05,0,0,.49,.39,.39,.69,.57,.52,.01,0,0,0,.88,0,0,.02,.48,0,0,0,0,0,0,.6,0,0,.94,.36,.41,0,.12,.07,.78,0,.93,.12,.64,.52,.11,.56,.1,0,0,.99,0,.33,0,.82,.63,.35,0,.05,.77,.59,0,.14,.77,.08,0,0,0,.09,.71,.02,.04,0,0,.35,.01,.38,.96,.58,.09,.25,.69,.01,0,.12,.01,.15,.15,.25,.93,.83,.51,.58,.61,.86,.52,.92,.23,.64,.45,.04,.3,.95,.49,0,.22,.78,.37,.03,0,.01,.21,.18,0,.38,0,0,.34,.07,0,.98,.17,.92,.56,.67,.05,0,.7,0,0,.19,0,.92,.83,0,.07,.58,.66,.02,.62,.03,.05,0,.79,0,0,.53,0,0,0,.24,.74,0,.61,.76,.1,0,.02,.01,.01,0,0,.51,0,.01,0,0,.68,0,0,.7,0,0,.44,0,.63,.42,0,.03,.19,.06,0,0,.58,.14,0,0,0,0,.38,.03,0,0,.02,0,.12,0,0,0,0,.7,0,.77,.3,0,0,.95,.09,.12,.13,0,.04,0,0,0,.06,.26,0,.25,.25,0,.07,.23,1,0,0,.08,.28,0,0,.34,.4,.02,0,.66,.74,.01,0,.96,0,0,0,.33,.34,0,0,0,.29,.12,.99,.44,.28,.71,0,0,.78,.06,0,.01,0,0,0,0,.51,.44,0,0,0,.16,0,.08,0,.97,.97,.32,.47,.3,0,.29,0,0,.11,0,.01,0,0,.52,0,.79,.01,0,0,0,.34,0,.15,0,0,0,.17,0,0,.88,0,.29,.02,.39,0,.04,.26,0,0,.47,.42,0,0,.94,.76,.02,.62,.34,.01,.15,.2,.01,0,.19,0,0,0,.99,.98,.93,0,0,0,.9,.73,.15,.48,.01,0,.33,0,.06,.44,.05,.47,.53,0,.02,.31,0,0,0,.92,.42,.81,.01,0,.02,.01,.96,0,.97,0,.43,.57,.01,0,0,.97,.24,0,.88,0,.63,.05,.7,0,.23,.57,.17,.23,0,0,0,.05,.21,.54,0,0,0,0,0,.86,.15,.09,0,.01,.29,0,.1,0,0,0,0,.66,.08,.01,0,0,.83,0,.99,.1,.02,.45,.91,0,0,0,.16,.88,0,.04,0,.04,.12,.01,.76,.95,0,.01,.02,.09,0,.67,.89,.17,0,.65,.28,0,.04,0,0,.18,0,0,0,.62,.16,0,0,.47,.07,0,.86,0,0,.71,0,0,.46,.37,0,0,0,0,0,0,0,.73,.01,.16,.72,.51,.38,.13,.72,0,0,.14,0,0,0,0,.19,.82,.14,0,0,.14,.64,.44,0,0,0,.07,0,0,.67,0,0,.06,.67,.38,0,.62,.24,.01,.25,.01,.16,.61,.05,.05,.09,0,.51,.82,0,.07,.14,0,0,0,0,.52,.01,0,.37,0,0,.05,0,.59,.6,.65,.06,.25,.02,0,.17,.13,0,0,0,0,.14,.32,.5,.43,.39,.03,.04,0,0,0,.75,.2,.01,.02,.19,0,.02,0,0,0,0,0,.6,.61,0,.57,0,.87,0,0,.01,.96,0,.07,0,0,.05,.61,0,.13,.84,.23,0,.46,.52,0,0,.01,0,0,0,.3,0,0,0,.4,0,.58,.06,0,.07,0,0,.1,.01,0,.05,.74,0,0,.48,.02,.01,.86,0,.01,0,0,.27,.03,0,0,0,0,.03,0,0,0,0,.25,.05,0,.56,0,.27,0,0,.76,.01,0,0,0,0,.16,.04,0,0,0,.15,0,0,0,.96,0,0,0,0,.54,0,.34,.06,0,0,.13,.9,0,0,0,.02,0,0,0,0,0,.35,.35,.03,.03,.07,0,.12,.13,0,.14,0,0,.01,0,0,.05,.44,0,.04,0,0,.31,.83,0,0,0,0,0,0,.26,0,.01,0,.99,.17,.99,.25,.78,0,0,.16,0,.26,0,.67,.13,0,0,0,0,0,.46,.35,.66,0,0,.76,.16,0,0,0,.35,0,.55,.61,0,.63,0,.89,.47,0,0,0,0,.37,0,0,0,0,0,0,.04,.01,0,.08,0,.31,0,0,.79,0,.16,.53,0,.01,0,0,0,.35,.54,.03,.72,.42,.91,0,0,0,.57,0,0,0,0,0,0,.95,.23,.32,0,.2,0,.06,0,0,.02,0,0,0,.06,0,0,.11,0,.85,0,0,.01,.01,.15,.99,.45,.61,0,0,0,0,.57,0,0,0,.83,.27,.09,.55,0,.04,0,0,0,0,.99,0,0,0,.09,.03,.47,0,0,.35,.55,0,.47,.02,.47,.5,.13,.33,0,0,.57,0,0,.15,0,0,.01,0,.98,0,0,0,0,.71,0,0,0,0,0,.04,0,0,0,0,0,0,.01,0,0,0,.09,.27,.43,.74,0,.86,0,.55,0,0,0,0,0,0,0,.69,0,.54,.02,0,.39,.34,.62,0,0,0,0,.01,0,0,0,.06,.9,.43,.78,.85,.66,0,.01,.99,.05,0,.4,0,0,.58,.21,.61,.03,.07,0,.17,.31,0,.01,0,0,0,0,0,.37,0,.14,.92,0,0,.07,.01,0,.95,0,.85,0,.83,0,0,.72,.01,.01,0,.71,0,.01,.62,0,0,0,0,.05,.48,0,0,0,.18,.58,.13,0,0,.55,0,0,0,0,.75,0,0,.26,.9,0,0,0,.39,0,0,.04,.63,.61,0,0,.39,0,.28,.7,0,.26,.67,.24,0,0,0,.09,.67,.25,.41,0,.04,.21,.39,.01,.85,0,0,0,.73,0,0,0,0,0,.87,.48,0,0,.16,.25,.76,.35,.28,0,0,.05,0,.18,.08,0,.09,.01,.95,.64,0,.14,.44,.14,0,0,0,0,0,.54,0,.18,.09,.24,.88,.4,0,0,.01,0,0,0,0,.04,0,0,0,0,.37,0,0,0,0,0,.07,0,.26,0,0,.42,0,0,0,.01,0,0,0,.78,0,0,0,.57,0,0,0,0,0,.25,0,0,.04,0,0,.63,0,0,.71,0,0,0,0,.05,.93,.89,.98,0,.01,0,0,0,.52,.12,.67,.14,.47,.26,0,.65,.13,0,.49,.15,0];export{a as pvalData};
