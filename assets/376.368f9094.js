const a=[.24,.31,.71,.92,.23,0,0,0,.08,.58,.34,0,.29,.43,.29,.79,.43,.28,.25,0,.09,0,.03,.11,.42,.02,.01,.13,.03,0,0,.21,.15,.15,.22,.07,.92,.53,.01,.82,.36,.08,.07,.37,.81,.31,.57,.58,0,0,.17,.02,.47,.16,0,.59,.12,0,.32,.47,0,.01,0,.82,.58,0,0,.15,.97,.38,.01,.43,0,.01,.17,.91,.04,0,.76,.1,.03,.26,.34,.03,0,.04,.05,.72,.18,.98,0,.67,0,.46,.05,.04,.02,.02,0,0,.05,0,0,.01,0,.87,.09,.15,.04,0,.53,0,.34,.04,0,.48,.09,0,.4,.1,.05,.07,.11,.71,.31,0,.11,.58,0,.83,0,.07,.07,0,.03,.83,0,.13,0,.13,0,.09,0,.03,.01,.69,.88,0,0,.87,0,.03,.1,.29,0,0,.23,.23,.06,.24,.01,0,.05,0,0,0,.67,0,0,.23,.01,0,0,.22,.01,0,.21,0,0,.2,.05,.18,.46,.25,0,.1,.27,.14,0,.04,.64,0,.15,0,0,.09,0,0,.29,.56,.97,0,.58,.78,.19,0,1,0,0,.2,0,.27,.08,.81,0,.01,.02,0,0,.02,0,0,0,.09,0,.6,0,.01,0,.1,.96,.05,.51,.41,.22,.01,.17,.01,0,.96,0,.21,0,0,0,.03,.15,.47,.29,.69,0,.76,0,0,.01,.51,.53,.12,.11,.53,.12,0,0,.01,.02,0,.03,.01,.42,.02,.06,.56,.45,.19,.37,.04,0,0,.08,0,0,0,.72,.25,0,.08,0,.85,0,.95,.07,0,.07,0,0,.06,.61,.26,.1,.01,.33,.54,.76,.58,0,.16,.35,0,0,.21,.08,.02,.72,.02,0,0,0,0,.25,.19,.01,0,.34,.01,0,0,.04,.9,.86,0,.04,0,0,.24,0,.08,0,0,.99,.64,0,.18,.4,.53,.8,.29,.75,0,.05,0,0,0,.22,0,.25,.97,.48,.01,.01,.98,.11,0,0,.15,.88,.81,0,.61,0,0,.06,.04,.14,0,0,0,.87,.04,.02,0,.22,0,.51,.36,.56,0,.01,.31,.01,.03,.01,.45,.63,.69,.43,.47,.01,.27,.98,.35,.02,0,.03,.02,0,.9,.59,.02,0,0,.32,.16,.73,.01,0,.63,0,.36,0,.02,.11,.67,.07,.5,.32,.76,.96,.97,.01,0,0,0,.12,.3,0,.67,.98,.03,.15,0,0,.02,0,.36,.01,0,.95,.03,.1,.05,.06,0,.03,0,.22,.91,0,.48,0,.13,.14,0,.02,0,.99,.01,.58,.21,.16,.22,.09,.78,.27,.27,0,.04,.04,.04,.16,0,0,.66,.07,0,.07,.27,0,.26,.51,.86,.4,0,.33,.96,.13,.2,0,.36,.11,0,0,.39,0,.67,0,.57,0,.02,.5,0,0,.01,.01,.06,.09,.03,0,0,0,.03,.15,.28,.07,.2,0,.02,.5,.12,.53,0,0,0,.62,.01,0,0,0,.01,0,0,.89,0,.33,.05,.32,.09,0,.02,.01,.05,0,.52,.19,.71,.03,.54,0,.01,.1,.36,.35,.02,.01,0,.96,.6,.42,.01,0,.25,.05,.43,.34,.47,.06,.61,.22,.57,.02,.87,.22,.18,0,.06,0,.55,.65,0,.02,.91,.58,.89,.61,.06,0,.15,.08,.84,0,.06,.03,.21,.29,0,.36,0,0,.83,.43,.02,.72,.54,.16,0,.83,.16,.51,0,.02,.4,0,.13,0,.49,0,.11,.35,0,0,.05,.82,0,.17,0,0,0,.03,0,.03,.06,.88,.05,.02,.16,.02,0,.01,.01,.59,0,.18,.01,0,.19,.11,.02,.41,.02,.29,.21,.44,.03,.12,0,.15,.02,.93,0,0,.02,.04,.44,.14,0,0,0,0,.18,.64,.62,.04,.01,.72,.03,0,.09,.28,.02,.01,0,.63,.51,0,.52,.02,.35,.29,.45,0,.91,.01,0,0,.24,.52,.16,.64,.8,.34,0,.01,0,0,0,0,.45,.07,0,.08,.5,0,0,.86,.25,.31,.14,.87,.01,.6,.01,.1,0,.09,.25,0,0,.89,.54,.39,.41,.38,.15,.03,0,.71,.83,.06,.53,0,0,.9,.44,.11,0,.51,.02,.61,.3,0,.57,.27,0,.05,0,.43,.68,0,.95,.36,.01,0,0,.06,.07,0,.7,0,.01,.2,0,.58,.06,.28,0,.45,0,0,0,.92,.06,.01,0,0,.16,.11,.01,.29,0,.75,0,.37,.01,0,0,.76,0,0,.05,0,.65,.86,.68,.02,.02,0,0,.01,0,.67,.24,.73,.01,0,.14,.18,.64,.24,.01,.06,.53,.31,.63,0,0,.04,.17,.21,.01,.1,0,0,.2,.63,0,0,.03,.12,.01,0,.14,.08,0,.01,.73,.48,.32,0,0,0,.54,0,.2,.28,.57,0,0,.06,.15,0,0,.03,.33,.63,0,0,0,.07,0,.47,.02,.01,.05,.78,.01,.68,.29,0,0,0,0,.03,.46,.05,0,.01,.01,.27,.43,0,.09,.09,.85,.16,.01,.03,.1,.08,0,.47,0,.1,0,.03,.2,.01,0,.36,0,0,.02,0,.36,.52,.09,.02,.21,0,.78,.04,0,0,.9,.67,.06,.01,.02,0,.92,0,.02,.31,.05,.01,.09,.06,.03,.01,.17,.48,.01,0,.78,0,.24,0,.33,.01,.05,.01,.02,.05,.9,.01,.57,0,.47,.13,.03,.08,.09,0,.03,.04,.29,.02,.4,.02,0,0,.02,.03,0,0,0,0,0,0,.51,.3,0,0,0,0,0,.56,0,.01,.52,.03,.34,.1,.33,.98,.44,.95,.12,.43,.72,.13,.35,.55,0,0,.02,0,.99,0,0,0,.41,.01,.07,.73,0,.01,0,.04,.27,.35,.13,0,.17,.36,0,.93,0,.68,0,.14,.06,.03,.69,0,.89,.65,0,.16,.5,.83,.01,0,.04,0,.04,.98,.99,.35,.05,0,.13,0,.78,.44,.71,0,.03,0,.12,.63,.5,0,0,0,.83,1,.03,.96,0,0,.15,.01,.28,.62,.26,0,.07,.23,.64,.01,.01,.42,.33,.1,.37,.83,0,0,0,.01,.01,.01,0,0,.23,.63,.03,.52,.21,0,.07,.04,0,0,.25,.09,.01,.06,.79,.02,.2,.62,.13,.61,.06,.25,.84,.26,.42,0,.51,.02,.03,.36,.15,.01,.3,.02,0,.01,.05,.09,.46,.23,.02,0,.01,.38,.15,.36,.25,.06,.82,0,.11,.96,0,.02,0,.28,.01,.17,.05,.04,0,.06,.76,.04,.29,.01,0,.01,.66,.31,0,0,0,.46,.5,.36,.73,0,.59,.5,.03,0,.02,.5,.65,.78,.62,.02,.2,.1,.06,.05,.52,.95,.01,0,.13,.19,0,.93,.01,0,0,.01,.17,.57,0,.12,.49,.01,.11,.09,0,.57,.02,.16,.01,.02,.01,.09,.01,.02,0,.02,0,0,0,0,.2,.02,.67,.44,.01,.03,.79,.81,.01,.88,.04,.27,.75,.01,.56,.41,.17,.04,.15,0,.56,0,0,.02,.1,0,.49,0,0,.06,.5,.06,0,0,0,0,0,0,.57,.23,.54,0,.28,.13,.01,.2,.9,0,0,0,.02,.2,0,.12,.08,.44,.11,.46,.35,.17,.02,0,0,.08,0,.2,.02,.08,0,.17,0,.27,.57,.04,.13,0,0,.47,.77,0,.72,.84,.02,.04,.11,.01,.06,.62,.03,0,.01,.34,.74,0,.01,.84,.01,.11,0,.85,.01,.05,.01,.05,.49,0,.39,.35,0,0,.04,.81,.27,.12,.82,.04,0,.57,.56,0,0,0,.01,.26,0,0,0,.01,0,.01,.01,.39,.03,.09,.01,0,0,.94,.62,.23,.01,0,.39,0,.68,.18,.14,.01,.33,.24,.06,.01,.37,.01,.08,.71,.55,0,0,.07,0,0,0,.77,.37,0,.14,.32,0,0,.73,0,.71,0,.12,.22,0,.01,.02,.01,.17,0,0,.05,.52,.22,.01,.01,.06,.94,.1,.01,.06,.48,.25,.31,.81,.14,.65,.06,0,0,0,.06,.03,.02,.58,0,.72,0,.27,.06,.06,.01,0,.17,.39,.67,.08,.35,.69,.01,.15,.13,.1,.17,0,.64,.85,.11,.24,.01,.1,0,0,.97,.55,.64,0,0,.3,.29,0,.01,.27,0,0,0,.66,0,.06,.55,0,0,0,0,.29,.45,0,0,.01,0,0,.15,0,.15,.13,.2,.03,.79,.07,.26,0,.87,0,.39,0,0,.09,.04,.97,.07,0,.05,.43,.04,.12,0,.2,0,0,0,.09,.16,.29,.02,.12,.48,0,0,.01,0,.01,0,.62,0,.01,0,.33,.05,0,.09,0,0,.07,.1,0,.01,.13,0,.37,0,.02,.29,0,0,.12,0,.1,.96,.07,.25,0,0,0,.01,0,.14,.77,.04,.07,.09,0,.01,.09,0,.01,0,.18,.24,.01,0,.1,0,0,0,.41,.1,.3,.01,.1,.08,0,.12,0,.88,0,.81,.51,.14,.11,.05,0,.26,.43,.38,.84,.8,0,0,.22,.98,.64,0,.01,0,0,0,0,.28,.01,.26,0,.81,0,.14,.6,.82,.12,.98,.92,0,.67,0,.06,.02,0,0,.01,.01,.02,0,.14,0,0,0,.09,.26,0,0,.01,.01,.51,0,.38,0,0,0,0,.23,.41,.62,.02,.01,0,.38,0,0,0,.71,0,.88,.09,0,.38,0,.9,.55,0,.66,.04,.7,.01,.53,0,.04,.45,0,0,.05,.01,.04,.18,.1,0,.31,.15,0,0,.14,.44,.01,.02,.39,.04,.6,.04,0,.55,0,.37,0,0,0,.47,.4,.31,.88,.71,0,0,.01,.09,.01,.05,0,.79,.07,.76,.19,0,0,.12,.02,0,.01,0,0,.06,.04,.01,.1,.51,.01,.28,.34,.03,.02,.11,.76,.01,.35,.01,0,.54,.7,.18,.13,.01,0,.01,.89,.17,.59,.09,.81,.61,0,.06,.94,.27,.94,.18,.27,.03,0,0,.85,.01,.67,.04,.52,.03,0,.86,0,0,.11,.32,.01,.36,0,0,0,.1,.57,.05,.14,.05,0,0,.09,.05,.17,.1,0,.73,0,.56,0,.83,.96,.85,0,.28,0,.15,0,.01,0,.01,0,.04,.77,0,.02,0,.69,0,.5,.89,.21,.06,.26,.02,.01,.68,.15,.01,0,.04,.72,.78,.4,.02,.13,.03,.88,.67,.8,.61,0,0,0,.01,.01,.07,.53,.67,.02,0,.51,0,0,0,.15,.07,.35,.85,.02,.01,.5,0,0,0,.3,.53,.12,.35,.81,.87,.34,.42,0,0,.01,.04,.01,0,.01,0,.03,.01,1,.35,.02,.73,.88,0,.01,.59,0,.13,.03,.11,0,0,0,0,0,.16,0,.14,.36,.12,.46,.41,.93,.23,.06,0,.01,0,.48,.84,.18,0,.01,.2,0,.17,.07,.4,.87,0,.03,.55,0,.09,.79,.15,.56,.08,.85,.9,.21,.01,.05,.23,.21,0,.04,0,.1,.81,.56,.8,.2,.02,.16,.14,.15,.04,.65,.09,0,.42,.17,0,.49,.1,.22,.23,.63,.14,.23,0,0,0,.53,.01,.03,.39,.5,.05,.55,0,.09,.01,0,.72,.96,.07,0,.06,0,.01,0,.02,.02,.01,.24,.2,0,.67,.01,.37,0,.07,.63,.03,.03,.57,.08,.42,.17,.69,.11,0,0,.57,.08,.06,.33,.12,.05,0,.18,.01,.01,.34,0,.86,.05,.45,0,0,.15,0,.11,.28,0,0,.19,.01,.03,.01,.01,.23,0,.47,.01,.04,.68,.07,.55,.63,.35,.01,.39,0];export{a as pvalData};
