const a=[0,.08,0,1,0,0,.14,0,0,.95,.7,.68,.12,.15,.06,.66,.18,.94,.11,.1,.61,.6,.45,.01,.17,.35,0,.13,.02,0,.66,.45,.14,.98,.49,.66,0,.26,.04,0,.8,.02,.02,.43,.88,.87,.06,.01,.17,0,.06,.04,0,.02,.01,.75,.03,.01,.44,.02,.02,.02,.16,.83,.11,0,.33,.02,.82,.75,.86,0,0,.12,0,.97,.82,.01,.23,.15,.11,.02,.08,.06,.55,.28,.67,.17,.01,.31,.19,.88,0,.03,.5,.03,.03,.92,.37,0,.74,.35,.32,.99,.12,.54,0,.01,.62,.89,.39,0,.47,.06,.03,0,.49,.14,.01,.02,.65,.33,.35,.03,.17,.09,0,0,0,0,0,0,.09,0,.04,.1,0,.54,.01,.37,.11,.37,.83,.85,.02,0,.44,.05,.13,0,.23,0,.44,.13,0,0,.06,.69,.62,.15,0,.35,.58,.03,0,0,.07,.02,0,.32,.02,.09,0,0,.92,.35,.06,0,0,.02,.83,.7,.81,0,.29,.35,.76,.71,0,.18,.64,0,.51,0,.39,.11,.78,.02,.48,.81,.85,.06,.01,.16,.03,.92,.86,0,0,.49,0,.05,.94,.06,.01,.78,.67,0,.1,.21,.11,.16,.9,.01,.09,0,0,.08,.01,.12,.76,.64,.03,0,.03,.04,0,.41,.24,.8,.01,0,0,0,0,0,.53,.19,.39,.94,0,.36,.02,0,.13,.62,.2,0,.3,0,.1,.56,0,.15,.03,.12,.08,.68,.11,.72,.43,.01,.04,0,.76,.19,0,0,.02,.22,0,0,.6,.8,0,.52,0,.03,0,1,0,.05,.14,0,0,.04,.58,.48,.01,.16,.45,0,.11,.94,.34,.86,0,.48,0,.67,.05,.77,.41,.03,.07,.18,.01,.2,0,.59,.1,.89,.09,.15,0,0,.11,.75,0,0,0,.26,.85,.06,0,.13,0,.12,0,.04,0,0,.63,.96,0,0,.97,0,.01,0,.66,0,.08,0,.37,.48,.19,.05,.02,0,.21,.82,0,.05,.4,.01,.04,0,.67,.05,.04,.1,.02,0,.06,0,.33,.47,.71,0,.36,.68,.88,.22,.06,.23,.15,.89,.19,.03,.07,.19,.13,0,0,0,.68,.81,.48,.45,.09,0,.03,.02,0,.5,.02,.06,.67,.76,0,.02,.01,.11,.02,.83,.19,0,0,.02,.01,.02,.73,.23,.01,0,0,.14,0,0,0,0,.01,.09,0,0,0,.13,0,.08,.73,.47,.41,.02,.92,.02,0,.12,0,.88,0,0,.12,.22,.76,.02,.13,0,0,.02,0,.29,.01,0,.17,0,.82,.17,.83,.02,0,0,.45,.65,0,.9,.66,0,.05,0,.56,.01,.22,0,.85,.05,0,0,.08,0,.74,.91,0,.16,.01,.02,0,.93,.26,0,0,.34,.64,.15,.04,.15,.92,.21,0,.09,.91,0,.04,.47,.81,.5,0,0,0,.42,.01,0,0,.19,.06,.07,.79,.41,.93,.89,0,0,.64,0,.04,.01,.01,.66,0,.52,.88,.36,.18,0,.93,.87,.01,0,0,.14,0,0,0,0,.59,.35,.44,.01,.29,.91,0,.43,.02,0,.84,1,.79,.07,0,.75,.01,0,.01,0,.14,0,.9,.03,.1,.35,.82,.31,.68,.02,0,0,0,.06,.86,0,.59,.63,.63,.02,0,.18,.33,0,0,0,.42,0,0,0,.02,0,0,.05,.29,.08,.64,.01,.5,0,.69,.07,0,0,.02,.74,0,0,.01,.18,0,.8,.97,.08,.92,0,.52,.27,.31,0,.08,.01,.91,0,0,.03,.1,.07,.62,.22,.7,.54,0,.05,.73,0,.94,.38,0,0,.95,.2,.06,.3,.69,.16,0,.01,.02,.11,.43,.28,.51,.01,.15,.21,.11,.78,.4,0,.13,0,.81,0,.25,.94,.1,0,0,.1,0,.32,.79,.13,.62,0,.97,.47,.01,.4,.2,0,.84,.01,.01,.01,.09,0,0,0,.44,.04,.65,.1,.17,0,.71,0,.12,0,.93,.35,0,.71,.7,.62,0,.57,0,.91,.01,0,.24,.17,.18,.05,.4,.01,.04,.4,0,0,0,.32,.07,.62,.71,.49,.3,0,.95,0,.04,0,0,.02,.22,.13,.3,.22,.09,.22,.01,0,.7,.45,0,.01,.88,.01,0,0,.43,.61,.92,.01,0,.01,.01,.03,0,.24,0,0,0,.36,0,.46,.54,.15,0,.41,.05,0,.01,.19,.85,.01,.49,.01,.03,.01,0,.49,.28,.45,0,.31,.81,.17,.17,.07,0,.35,.32,.97,.4,.21,.02,.22,.99,0,.64,.01,.01,0,.26,0,0,.01,.06,0,.28,.01,.04,.94,.01,.01,.01,.72,.64,.17,.5,0,.89,.38,.57,.01,.69,0,.58,.06,0,.62,0,.64,0,.04,.02,.1,.83,.83,.15,.3,0,.22,.01,0,.01,.92,0,0,.13,0,.02,0,0,.13,.15,0,0,.34,.01,0,.77,.03,0,.87,.28,.01,0,.03,0,0,.17,0,.01,.05,.03,0,.09,.13,.69,.28,.03,.24,0,.92,.93,.9,.08,.81,.65,0,.45,0,.15,0,.59,.05,.02,0,.11,0,0,.26,0,.79,.08,.45,.2,0,.02,0,.72,.6,0,0,0,.02,.01,.02,0,.93,.66,.04,.95,.05,.02,.18,0,.15,0,.36,.97,.01,0,.08,.02,0,0,.16,.06,.68,.05,0,.66,.52,0,.02,.99,.7,.77,0,.01,.42,0,0,0,.04,.4,.23,0,0,0,.24,0,0,.19,0,0,0,0,.2,.22,0,.14,0,0,0,.98,0,.42,0,.47,.5,.36,.97,.63,.69,.9,.01,.79,.11,.14,.5,.88,0,0,0,0,.97,0,0,0,.58,.12,.24,.18,.11,.27,.12,.26,.2,.84,.14,0,.7,.6,0,.79,0,.05,0,.21,.58,0,0,0,.35,.43,0,.35,.42,.33,.04,.01,.4,.14,0,.38,0,.63,.02,.01,.64,0,.16,.01,.72,.03,.01,.01,.04,0,.17,0,0,0,0,.03,.34,0,0,.3,0,.14,.66,.06,.51,0,.01,.5,.53,.65,.43,.03,.26,.01,.52,0,.94,0,.03,.41,.08,0,.97,0,.05,.01,0,.01,.03,.38,0,.11,0,0,.59,.71,.06,.51,.76,0,.02,.93,0,.85,.48,.52,.6,.46,.04,.32,.67,0,.04,0,.87,.06,0,.76,0,.01,0,.11,.37,.23,.27,.43,.03,.27,0,.02,.06,.59,0,0,.36,.87,.01,.04,0,.29,.11,0,0,.02,0,.45,.54,.01,0,.36,.64,0,.94,.48,0,.03,.01,0,.53,.51,.68,0,.37,.14,.01,.75,.36,0,0,.02,0,.04,0,0,.08,.06,.23,.71,.3,.44,0,.94,.01,.13,.02,0,.73,0,0,0,0,0,.01,.21,0,.3,.01,.01,.05,0,.34,.02,.11,.01,.02,.06,.24,.67,0,.09,.4,0,0,.18,.42,0,.03,.54,.62,.63,.04,0,.03,0,.46,.05,.15,.83,.51,.46,.08,.71,.06,.01,.33,.27,0,.11,.27,0,.75,.01,0,0,0,0,0,0,.01,0,.36,.01,.65,.39,.01,.65,0,0,.06,0,.86,.13,0,.17,0,0,.12,0,.2,.92,.08,.17,.3,.09,.01,0,0,0,.34,.55,.2,.54,0,0,.13,.12,0,0,0,0,.47,.02,0,0,.32,.02,.13,0,0,0,.39,.29,0,.62,.05,0,0,0,0,.02,0,.19,.01,0,.88,.04,.64,0,.55,.57,.66,0,.55,.06,.12,0,.14,.04,.03,.52,.28,0,0,.07,.03,.39,0,.01,0,.09,0,0,.17,.5,0,0,0,.43,0,.48,.65,0,0,0,.42,.11,0,0,0,.07,0,.85,0,0,.26,0,.03,.11,.87,0,.51,0,.01,0,0,0,.74,0,.52,0,.87,0,.18,0,0,.05,.04,.14,0,0,.24,.12,0,.03,0,.66,0,.45,.06,.12,.46,.45,.11,.03,0,.12,.86,.01,.83,.9,.33,.03,.01,.5,.23,.04,.92,.63,.07,0,.58,.32,.01,0,.16,.34,0,.97,.68,.51,0,0,.01,.36,.01,0,.77,.23,0,.74,.69,.88,.11,.19,.63,0,.47,.12,.82,.71,.04,0,.76,0,.65,.71,.02,.29,.01,0,.28,0,.03,.86,.41,0,.18,0,0,.84,.09,0,.51,0,.05,.77,.12,.57,.31,.8,0,.18,.01,0,0,.18,0,0,.01,.75,.26,.1,.18,.26,0,.23,.05,.01,.66,.34,.76,.47,.27,.01,.39,.05,.3,.02,.07,.34,.06,.02,.22,0,0,.6,.98,.17,.49,0,0,.05,0,.01,.88,.13,.01,.01,0,.88,0,.98,0,.65,.03,.33,.4,.88,0,.38,.57,.8,.26,0,.6,.04,0,.49,.87,.01,.46,.01,0,0,.93,.04,.95,0,.02,.02,.03,0,.91,.2,.89,.62,0,0,0,0,.15,.01,.85,.97,0,.05,0,0,0,.49,.79,.82,.34,.78,0,.01,0,.6,.95,.01,0,0,0,.93,.11,.04,0,.02,.55,0,1,.07,.93,.7,0,.48,0,.51,.4,.82,.32,0,.11,.09,.33,0,.46,0,.08,.12,.87,.15,.24,.01,.01,0,0,.04,.52,.89,.53,.4,.82,.9,0,.01,.1,.14,0,.11,0,.1,0,0,.14,.01,.06,0,0,.09,0,.3,.06,.3,0,.39,.53,.89,.84,0,.21,.72,.06,.15,0,.46,.08,.92,.04,.02,0,0,.07,0,.12,.59,.03,.01,.06,0,.67,.01,.08,.25,.75,0,.19,.01,.21,.52,.67,.8,.13,.66,.58,.01,0,0,0,.65,.04,.48,.02,0,.43,.33,.11,0,.09,.77,.79,.12,0,0,.01,.8,.09,0,0,0,.08,.01,.15,.75,.74,.13,.58,0,.02,.05,0,.68,.21,.39,.91,0,.03,.63,.16,0,.33,0,.08,.01,.2,.22,.11,.04,.58,.17,.49,.77,.08,0,0,0,0,0,.39,.65,.07,0,0,0,.71,.01,.7,.02,0,.18,.29,.63,.02,.21,.01,0,.21,.44,.26,.01,.04,.19,.04,0,.12,.13,0,0,.34,0,0,.22,0,0,0,.27,.53,.69,.74,.82,.56,.01,.73,0,.5,.01,.24,.03,.33,.02,.01,0,.07,.91,.91,.91,.05,0,.75,0,0,0,.13,.39,.04,0,0,.08,.07,.31,.4,0,.19,.01,.04,.48,.46,.02,0,0,0,.61,.29,.94,0,.14,0,.04,0,0,.14,.32,.17,0,0,0,0,.13,.2,.02,0,.74,.03,.87,.53,.78,.33,.19,.78,.16,.01,.19,0,.04,.05,.66,0,.24,0,.52,.1,.02,.43,.72,.38,.06,.01,.01,0,0,0,0,.08,.7,.7,.71,.6,.87,0,.02,.1,.12,0,.08,.06,.28,.72,.52,.44,.86,.04,.05,.69,.04,.63,.13,.15,.1,.21,.32,.01,0,0,0,.84,0,0,0,.87,.09,.98,.64,.31,.01,.03,.99,.7,.3,.53,0,.57,0,.5,.27,.22,0,0,0,.61,0,0,.04,0,.07,.08,0,.02,0,.01,.85,0,.62,.12,0,.25,.02,.26,.01,.01,.21,.04,0,0,.52,.01,.37,.06,.2,.34,.16,.24,.06,.17,0,.55,.62,.15,.18,0,0,.33,0,.98,.01,0,.01,0,.56,0,0,.68,.06,.02,.01,.11,0,0,0,.66,.01,.03,.64,.01,.02,0,0,.94,.81,.8,0,.33,.2,.24,.06,0,.01,.04,.1,.45,.65,.22,0,.38,.51,.28,.17,.05,.31,.25,0,0,.75,0];export{a as pvalData};
