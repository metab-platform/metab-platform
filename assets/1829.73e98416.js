const a=[.01,.13,0,.27,0,.14,.01,.06,.57,.08,.02,.82,.86,0,0,.43,.01,.45,.03,.4,.25,.95,.38,.24,.02,0,.37,.02,0,.13,.01,.07,0,.01,.01,.69,0,.37,.13,0,.23,0,0,.63,.51,.61,.68,.67,.66,.65,.89,.83,.34,0,0,.81,.28,.17,.26,0,.03,0,0,.75,.19,.98,0,.23,.16,.39,.49,.09,.02,.86,0,.38,.31,.02,0,.14,0,0,.32,0,.72,.73,0,.93,0,0,.05,.85,.83,0,.89,.89,0,.52,.71,0,.74,0,0,.26,0,.68,.41,.1,0,0,.58,.64,.49,0,.49,0,0,.22,.27,.04,.09,.87,.01,.68,.81,0,0,.08,.77,0,.05,0,.28,.15,.01,.66,.27,.3,.1,.21,0,.05,0,0,.36,.39,.88,.04,0,.18,0,.03,.82,.15,.01,.07,.34,.94,.05,.04,.83,0,.48,.26,.57,.02,0,.17,.25,0,.31,.42,.25,0,0,.98,.88,.3,.1,0,.71,.65,.5,0,0,.86,.34,.3,.46,.39,.48,.71,.78,0,0,0,0,0,.78,.1,.08,.03,0,.57,0,0,.69,.03,.07,.17,0,.05,.16,.01,.22,.02,.79,.07,.46,0,0,0,0,0,.01,0,.07,.19,.04,.01,.44,.4,.6,0,.19,.13,.02,.01,.81,.71,.46,.01,0,.05,.28,0,.38,.83,.05,.62,1,.71,0,.17,0,.2,.04,.05,.92,0,.37,.46,.02,0,.05,0,.65,0,1,.06,.23,0,0,0,0,.8,.94,.24,0,.72,.45,0,.28,0,.17,0,.01,0,.1,.49,.32,.16,0,0,.86,0,.11,.05,.6,.06,.83,0,.11,.04,.64,.3,.57,.02,.01,.1,0,.43,.54,.28,0,.06,.52,.52,0,.34,0,.14,.01,0,.03,.25,0,.58,.38,.15,0,0,.56,.18,.89,.94,.48,.02,0,.08,.21,0,.68,.02,0,0,.28,.03,0,.12,0,0,.38,.23,0,.17,.04,.78,0,0,.87,.22,.09,.04,.62,0,.24,0,0,.92,0,.34,.31,.36,0,.69,.5,0,.18,.03,.84,.65,.66,.88,.91,.01,.58,.88,0,0,0,.55,.32,.22,.1,0,.01,.22,.72,.83,.96,.3,0,.23,.35,.45,.02,0,0,0,0,0,.21,0,.16,.88,0,0,.39,0,.35,0,.59,.38,.01,0,0,.75,.03,0,0,.68,.08,.37,.62,0,0,0,0,0,0,0,0,.1,.28,0,0,0,.03,0,.75,.04,0,.93,.29,.01,.37,0,.23,.07,0,0,0,.03,.97,.47,.01,.48,0,0,.16,0,0,.72,.13,0,0,.02,0,0,0,0,0,.41,.26,.51,0,.02,0,0,.95,.71,0,.09,0,0,.39,.01,0,.01,.9,.51,0,0,0,.49,0,0,0,0,0,.49,0,.48,.2,.96,.26,.03,.29,0,.5,0,.33,.48,0,.32,.53,.07,.11,0,.96,.41,.18,0,.52,.17,.01,0,.13,.7,.8,.08,.33,.42,.75,.6,.55,.69,0,.49,0,0,0,0,0,.25,.06,0,.02,.03,0,.84,.61,0,.06,.06,.61,.72,.16,.36,0,0,.42,0,0,0,.23,0,.3,0,.88,.49,0,.13,0,0,0,0,.37,0,.06,.81,.84,0,0,0,0,0,0,.22,0,0,0,.6,0,.35,.59,.71,.53,.51,.12,0,.24,.83,.11,.05,0,0,.53,.9,.75,.25,.01,.43,.36,.73,.51,.12,0,0,.66,0,0,.25,0,.1,0,0,.01,.35,.17,0,.01,.03,0,0,.48,0,.62,0,.4,0,.35,0,0,.56,.18,.45,.09,.16,0,0,0,.14,.44,.55,.64,.16,0,0,.46,.31,.61,.05,0,.02,0,0,.11,.16,.29,.07,0,0,.19,.2,0,0,0,.02,.69,.61,.08,.08,.17,0,.01,.06,0,0,0,.21,.01,0,.55,.47,.99,0,.98,.83,0,0,.48,.3,.66,.61,.02,.48,0,.6,.15,0,0,.32,0,0,.01,.75,.15,0,0,.34,0,.54,.18,.36,0,.97,0,.14,.07,0,.1,.51,.04,0,.4,0,.39,0,.48,.94,.66,.02,0,.32,.47,.01,0,.88,0,.03,0,0,.01,0,0,.34,.01,.13,.24,.01,0,.15,.09,.08,.92,0,0,.08,0,.49,.27,0,0,0,.02,.16,0,.33,.8,.44,0,.77,0,.16,0,0,0,0,0,.11,0,0,0,.01,.63,.53,.09,.66,.88,.49,0,.19,0,.04,0,.26,.35,0,.81,.86,0,0,.66,0,.07,.06,.46,.8,.1,0,.03,.48,.85,.11,.55,.69,.04,.13,0,0,.24,.01,.56,0,.2,.34,.18,.91,.14,.72,.1,.31,.79,.04,.06,.36,.92,.29,0,0,.3,0,.1,.82,.08,.09,.15,0,0,.69,.4,.1,.01,.1,.03,.64,.01,.18,.25,.01,.87,0,0,.3,0,.49,0,0,0,0,0,.01,0,.69,0,.13,0,0,.02,.02,.07,.31,.43,0,.65,.78,.18,.33,.37,.45,.92,.08,0,.02,.49,.13,0,.38,.06,.71,0,.06,0,0,.47,0,0,.14,.87,0,0,0,0,0,.29,.97,0,0,.93,.43,.21,0,.09,.04,0,0,.59,.43,0,.83,.36,.56,.14,.95,0,0,0,.01,0,.59,0,.46,0,.55,.87,.63,0,.14,.35,.37,0,0,0,0,.31,0,.52,0,0,.02,.21,.04,.58,0,0,.51,.67,0,.7,0,.73,0,.05,.1,.7,.64,.05,.2,.77,.93,.37,.95,.18,.34,.31,.03,.93,.92,0,0,.04,.01,.15,.1,.89,0,.22,.12,0,.09,.01,0,.84,0,0,.51,.34,.76,.04,.21,.01,.16,.24,.08,0,.06,.34,.21,0,0,.13,.15,.21,.13,.47,0,1,0,.97,.01,.02,.67,.13,.03,.26,.45,0,0,0,.88,.24,0,.56,0,.68,.42,0,.49,.01,.47,0,0,.36,.06,0,.01,0,0,.48,.92,1,.96,.11,.62,.75,0,.86,0,.62,.04,0,.98,0,0,0,.21,0,0,.01,.1,0,.6,0,.36,0,.31,0,.84,.28,.02,.05,.44,.36,.23,.27,.01,.02,0,.46,.01,.37,.32,.02,.55,.21,.02,.33,.8,.33,0,0,0,.45,0,0,.13,.13,.31,0,.12,.43,0,0,.31,0,.09,0,0,1,.24,.1,0,.8,.06,.34,.77,.14,.66,.01,.03,.58,.55,0,.01,0,0,0,.9,.42,.07,0,.11,0,.16,0,.87,.01,.06,.01,.04,.47,.05,.01,.6,0,0,.1,0,.35,.09,0,.85,0,.64,.7,0,0,.26,.77,0,.93,0,.05,0,.67,0,0,.09,0,.04,.04,0,0,0,.1,0,0,.01,.19,0,.01,.33,.21,.1,.9,0,0,.25,.61,.11,0,.1,0,0,0,.9,.75,.29,0,0,0,.15,.3,.74,.73,.11,0,.65,0,.53,.93,.22,.32,.04,0,0,0,0,0,0,.05,0,.57,0,.21,.12,.45,.92,0,.3,0,.01,0,0,0,.49,0,.86,0,.43,.03,.89,.78,.95,0,.95,.56,.98,.7,0,0,0,.87,.18,.48,0,.01,0,0,0,.01,.91,.63,0,.04,.18,0,.55,.01,0,0,0,.79,.04,.02,.03,0,.09,.19,.78,.01,0,.55,.44,0,0,0,0,.03,0,.17,.41,.66,.03,0,.85,.46,0,.31,.01,.18,.33,.06,.75,.58,0,.48,.35,.03,.18,0,.05,.68,.38,.16,.34,0,.28,0,0,.64,.04,0,.07,0,.22,.03,.72,.03,.74,.8,0,.81,.01,0,0,.26,0,.44,0,.02,.36,.47,.13,.24,.1,0,0,.13,0,.17,0,0,0,.01,.74,0,.09,.21,.39,.51,0,0,.24,.07,.19,0,.99,0,0,.47,.09,.56,0,.36,.77,.04,.07,.01,.74,.44,.2,0,.38,0,0,.07,0,.1,.28,0,.07,0,0,.77,.31,.12,.32,.04,.02,0,0,.66,.02,.42,.15,.65,0,0,0,.65,.06,0,.01,0,.21,.65,.68,.6,.02,.02,.68,0,0,.05,.68,.09,0,.01,.05,0,.28,0,.46,0,0,0,.21,.03,0,.87,.05,.02,0,0,.27,.13,0,0,0,0,.04,.09,.01,.7,.32,.15,0,.44,.4,0,0,.04,0,0,.16,.65,.02,.14,.27,.34,.54,.57,.22,0,.14,.02,.1,.18,.06,.12,.04,.07,.03,0,.99,.16,.53,.02,0,.81,.71,0,.08,.29,0,0,0,0,.28,0,0,0,.61,.4,.62,0,.05,0,.26,0,0,.03,.13,0,0,0,.19,.48,.93,0,.25,0,.24,.17,.24,.04,.36,0,0,.04,0,.21,0,.49,.84,0,.1,0,.27,0,0,0,.56,.31,.18,0,0,0,.37,.02,.22,.1,0,0,.24,.93,0,.47,0,0,.01,0,0,.08,.05,0,.48,.22,0,.08,0,.04,.01,0,0,.05,0,.52,0,.01,0,.01,.85,.93,.87,.64,.43,0,.05,0,.19,.06,.46,.13,0,0,0,0,0,.04,.21,0,.97,.25,.49,.03,0,.01,0,0,0,.07,.56,.06,.92,0,.31,.42,0,0,0,0,0,0,.01,0,.35,0,0,.22,0,0,.12,0,.1,0,0,.65,0,.76,.34,.19,.58,.82,.12,.32,0,.9,.27,0,.95,.3,0,0,.3,.37,0,0,.3,0,0,0,.47,.39,.05,0,.56,.01,.5,.25,.6,.22,0,0,0,.17,0,0,.84,.36,.35,0,0,.67,.05,.59,.18,.27,.11,.31,0,0,0,0,.15,.53,0,.42,.57,.05,.49,0,.35,0,0,0,0,.27,0,0,0,.03,.1,.07,.07,0,.26,.03,0,.35,.35,.84,.86,.04,.98,0,0,.07,0,0,0,0,0,.04,0,.05,0,0,0,0,0,0,0,0,0,.01,0,0,0,0,.01,.06,.02,.94,0,0,0,.36,.42,.19,.01,0,.01,0,.27,0,0,0,0,0,0,0,.2,0,.35,.45,0,.04,.2,.1,0,0,0,0,.17,0,.04,0,.71,.94,.43,.8,.26,.59,0,.01,.29,.08,0,.03,.01,.01,.21,.39,.12,.06,.73,0,.39,.09,.03,.07,.23,0,0,.03,.01,.98,0,.29,.12,0,0,.03,.11,0,.04,0,.46,0,.76,0,.01,.65,.11,.77,.06,.92,0,.05,.44,0,0,0,0,.18,.36,0,0,.02,.21,.04,.94,0,0,.24,.01,0,0,.06,0,0,0,.24,.01,.01,.01,0,.29,.07,0,.29,.39,.19,0,0,.86,0,0,.93,0,0,.82,.87,0,.02,0,.38,.78,.25,.65,0,0,.52,.14,.06,.01,0,0,0,.63,0,0,0,0,0,.55,.47,.1,0,.13,0,.96,.22,.04,0,0,0,0,.79,0,0,.55,.47,.01,.04,.02,.16,.83,.71,0,0,.28,0,.63,.46,.24,.14,.02,.9,.02,0,0,0,.11,0,0,0,0,0,0,.02,0,.12,.07,0,0,0,0,0,.29,0,0,0,0,.06,.08,0,0,0,0,0,0,.45,0,0,0,.56,0,0,0,0,0,0,0,0,.38,0,0,.17,0,0,.74,0,.01,0,0,.79,.86,.1,0,0,.13,0,.04,0,.04,.19,.13,.8,.81,.71,.41,.25,.04,0,.22,.21,.01];export{a as pvalData};
