const a=[.29,.3,.06,.77,.02,.61,.81,0,.22,0,.57,.06,.41,.01,.47,.15,.25,.39,.01,.8,.31,0,.19,.13,.71,.03,0,.34,.98,0,.02,0,.03,0,0,.29,.18,.59,.44,.14,.48,.01,.04,.39,.08,.41,.03,0,0,0,.15,.24,.69,.06,0,.87,.28,0,.17,.11,0,.05,0,.8,0,0,.01,.1,.48,.25,.44,.4,0,.09,.01,.97,.29,0,.52,0,.22,.12,.41,.02,0,0,.1,.2,.01,.68,0,.85,0,.72,.09,.19,.09,.91,0,0,.38,0,.01,.13,0,.21,.19,.01,.26,0,.2,0,.8,.74,0,.83,.18,0,0,.16,.4,0,.02,.78,.08,0,.15,.02,0,.19,0,.4,.32,0,.64,.21,0,.02,0,.1,0,.01,0,.05,.03,.09,.83,.38,.01,.72,0,0,.81,.36,0,.01,.17,.99,.58,.29,0,0,.18,0,0,0,.11,0,.59,.03,.11,0,0,0,.06,0,.71,0,0,.13,.36,.97,.08,.66,0,.55,.57,.01,0,.11,.79,0,.02,0,0,.38,0,.29,.93,0,.13,0,.09,.41,.05,0,.15,0,0,.2,0,.29,.07,.67,0,0,.76,0,0,0,.03,0,.25,.13,.02,.08,0,0,.09,0,.66,.41,.45,.17,.24,.04,.17,.5,.21,.7,0,.23,0,0,0,0,.13,0,.65,.17,0,0,0,.34,0,.07,.93,0,.04,.35,.69,.07,0,0,.62,0,.01,.02,.4,0,0,.41,.09,.04,.09,.46,0,0,.03,0,0,0,.13,.17,.06,.29,0,.21,.01,0,.06,0,.14,.01,.03,.03,.23,.06,0,.01,.57,.38,0,.93,.97,.45,0,0,.09,.79,0,.23,.01,.02,.29,.01,0,.02,.03,0,0,0,.18,.03,0,.01,.15,.42,.03,.02,.17,.02,.31,.81,0,.91,0,.06,.48,0,0,.22,.03,.38,.37,.12,.32,0,.14,0,0,0,.09,.06,.81,.15,.02,.18,.02,.23,.06,.06,.05,0,.02,.69,.01,.06,0,.27,0,.45,.11,.81,0,.06,.72,.05,.8,0,.99,.5,.58,.17,.73,.87,.59,.99,.51,.29,.02,.21,.57,.03,.19,.38,0,.3,.88,.34,0,.92,.01,.04,0,.93,.57,.02,0,.18,.07,.13,.49,.02,.62,.24,0,.25,0,.01,.02,.68,0,.33,.57,.28,.27,.26,0,.04,.01,.76,.1,.63,0,.03,.37,.12,.08,0,0,0,0,.18,0,.01,.42,.08,.02,0,.02,0,.01,.23,.7,.85,0,.06,0,0,.01,.04,.38,0,.26,.02,.69,.16,.02,.1,.02,.1,.01,.07,0,.4,0,0,.39,0,0,.65,.09,0,0,.77,0,.1,.32,.14,.14,.05,.05,.11,0,.17,0,.88,.15,0,0,.51,.02,.35,0,.89,.94,.65,.92,0,0,.54,0,.68,0,0,0,0,0,.06,.07,.08,.07,.3,.01,.18,.81,0,.05,.01,0,0,.17,0,.15,0,.03,.32,.57,.01,.4,0,.01,0,0,.14,0,0,.01,.55,0,.13,.02,.12,0,.01,0,.02,.58,.81,.01,0,.3,0,.22,.85,.98,.65,0,.55,.05,.12,.04,.14,.06,.12,.85,0,0,.8,0,.19,0,.44,0,.28,.17,0,0,.29,.99,.63,.35,0,0,.42,.05,.09,0,.02,.4,.01,.08,0,.13,0,0,0,.32,.93,.23,.36,.82,0,.6,.54,.35,0,.12,.13,.27,.38,.59,.71,.38,.17,0,.01,0,.01,.2,.1,.04,0,.21,0,.51,0,0,0,0,.02,0,.78,.67,.01,.21,0,0,0,.95,.03,0,.16,.37,.88,.24,.95,.49,.36,.27,.13,.09,0,.68,.48,.8,.6,.01,0,.09,.77,.97,0,.02,0,0,.04,.07,.16,.08,.6,.27,.02,0,0,.14,.01,.12,.03,.25,.12,.87,.02,0,.59,0,.01,.02,.11,.01,0,0,.09,.8,.38,.9,.59,.14,0,.01,0,0,.1,.36,.36,.77,.3,.27,.42,0,.04,.23,.66,.35,.45,.01,0,.79,.09,.05,.02,.32,.07,0,0,.34,.75,.66,.35,.03,.57,0,0,.9,.57,.05,.78,.12,0,.44,0,0,0,.02,.83,0,0,.38,.2,.86,0,.55,.19,0,.51,0,.07,0,.08,.06,.01,.01,.01,0,.13,0,0,.17,0,.15,0,.68,0,.17,0,0,0,.01,0,0,.89,.01,.11,.08,0,.16,0,.21,0,.98,.13,.1,0,.1,.18,0,.03,0,.85,.82,.88,.27,0,.06,0,.22,0,.69,.18,.76,.16,0,.97,.87,.09,.07,.02,.06,.56,.5,.1,0,.01,.5,0,.69,.08,.02,0,.01,.26,.19,0,0,0,.03,0,0,.66,.39,0,0,.57,.51,.68,0,0,0,0,0,.03,0,.05,.75,0,0,.26,0,0,.73,.83,.79,0,.01,0,.63,.38,.21,0,0,.03,.83,0,.51,.01,0,.27,0,0,0,.07,.04,0,.04,.46,.02,.68,.02,.02,.59,.15,.83,.94,.26,.66,.05,0,.29,0,.01,0,0,.02,0,.53,.23,0,0,.25,.01,.14,.98,.8,0,.03,.01,.11,.09,0,0,.07,.93,.03,.01,.18,0,.74,0,.02,1,0,.29,.03,.15,.53,0,.22,.71,.56,0,.65,.34,0,0,.56,0,.99,.01,.14,.36,.11,0,.46,.01,.23,.46,.19,0,.73,0,.66,.07,.03,.09,.86,.55,.12,0,.18,.02,0,0,0,.03,.01,0,.17,.35,0,0,0,0,0,.78,0,.7,.22,.02,.3,.62,.53,.34,.07,.24,0,.82,.35,.87,.78,.16,0,.28,0,.53,.9,0,.38,.98,.83,0,.63,0,0,.09,.11,0,.22,.06,.16,0,.38,.23,.12,.74,0,.5,0,.74,.34,.22,.22,0,.65,.23,0,.84,.38,.09,.23,0,0,.93,.05,.64,.33,.09,.53,.03,.4,0,.63,.02,.84,0,.04,0,.16,.22,.94,0,0,0,.26,0,.01,.24,.03,0,.02,.03,0,.38,.3,0,0,.12,.28,0,.02,.58,.47,.04,0,.19,0,0,.69,.04,.22,.05,0,0,.06,.23,.03,.1,.1,.1,.03,.01,0,0,.66,0,0,.26,.61,0,.11,.06,.26,.53,.02,.01,.27,.24,.06,0,.4,0,.12,.05,.54,.42,.03,.13,.03,.01,.79,.09,0,.58,.18,0,.01,.51,.1,.09,.17,.27,.04,0,.06,.43,0,.02,.01,.01,.05,.09,0,.45,0,.87,.32,.04,.04,0,0,0,.54,0,.06,0,.77,.67,.37,.03,.71,0,.1,.18,0,.55,.03,.14,.57,.22,.25,.63,.12,.27,0,.07,.93,.43,0,0,.01,0,.01,.09,.01,.28,0,.4,.09,.12,0,.1,.97,.43,0,.89,.03,.72,.01,.01,0,.84,0,.42,.01,.01,0,.34,0,.09,0,0,.03,0,.41,.02,.01,.16,.84,.21,.02,.62,.02,.11,.62,.02,.69,.54,.96,.01,.07,.01,.88,.05,0,.93,.1,0,0,0,0,.06,.29,.02,.25,0,0,0,0,0,.23,.24,.84,0,0,.06,0,.82,.16,.03,.85,0,.44,.78,0,.71,.06,.3,.55,.6,.04,.07,.01,0,0,.02,0,0,0,.02,0,.46,0,0,.36,.45,.17,0,.01,.07,.01,0,.32,.03,.01,.1,.67,0,.24,.35,.01,0,.16,.04,0,.02,.57,.25,0,.07,0,.08,.02,.02,.13,.81,.91,0,.99,.57,0,.01,.52,.46,.05,.93,.25,.37,0,.23,.62,0,.01,.05,.15,.85,.01,0,0,.5,0,.08,0,.07,.22,.2,.5,0,0,.54,0,0,.51,.09,.23,.06,.01,.37,.74,.07,.52,.01,.95,.88,.68,.01,.14,.18,.33,0,.03,0,.46,0,0,.13,0,0,.02,.04,.7,0,.8,.71,.08,.78,.16,.74,0,0,.13,.01,.02,.15,.62,.1,.59,.28,.01,.16,.49,.01,.27,.94,0,.45,.98,.1,.7,.07,.77,.74,.01,.01,0,0,.04,.69,.68,0,.23,0,.4,.02,.01,.08,.07,.45,.03,.48,.79,.43,.16,.63,.12,.01,.16,.51,0,0,.95,.94,.01,.35,0,0,.02,.01,.18,.94,.8,0,.11,.67,0,0,.66,0,.51,0,.97,.26,.25,.9,.12,.04,.63,0,.56,.78,0,.1,.01,0,0,.63,0,.31,.27,.52,.19,.64,0,0,0,.04,0,.04,.03,.1,.95,.09,.58,.47,0,.54,.27,0,.24,0,.11,0,0,0,0,.34,.73,.01,.11,.45,0,.38,.11,0,.8,0,.65,0,.52,0,.2,.07,0,.01,0,.01,.74,.13,0,0,.84,.01,.53,0,0,.07,0,.02,.86,.04,0,.6,.57,.03,0,.02,0,.2,0,.05,.05,.04,.02,.28,.01,.01,.01,0,0,0,.22,0,.65,.03,.02,0,0,0,.34,.06,.1,0,0,0,0,.03,0,.72,0,.12,.62,.25,.03,.53,.05,.18,.02,.83,.01,.39,0,0,.11,.94,.08,0,.02,0,0,0,0,0,0,.87,0,.27,0,.9,.92,.74,.08,.24,.5,.53,.01,0,.78,0,0,.07,0,.04,.01,.4,.01,0,0,.31,.09,.88,.01,0,0,.84,0,.4,.2,0,0,0,0,.52,.09,.19,0,.07,0,.39,0,0,0,.2,0,.95,.07,0,.31,0,.17,.04,0,.5,0,.43,0,.02,0,.06,.98,0,0,.97,0,.9,.55,.96,.02,.2,.19,0,0,.06,.52,0,.11,.29,.8,.06,.28,.13,.14,.23,.72,0,0,0,.24,.03,.96,.12,.14,0,0,.06,0,.01,0,0,.78,0,.63,.5,.81,0,.16,0,.24,.14,0,0,.05,.02,.88,.35,.63,0,.31,.66,.04,.39,.33,.9,0,.49,0,0,.34,.5,.95,.05,.34,0,.01,.11,.01,.44,.51,.43,.16,0,0,.97,.12,.28,.09,.06,.69,0,0,.68,.04,.18,.02,.42,.74,.93,.11,.08,0,0,0,0,.25,.64,0,0,0,0,0,.02,0,0,0,.03,.98,.01,.18,0,.61,.04,.48,0,.07,.35,.29,.01,.43,.01,.05,.54,.06,.01,.12,0,.9,.45,0,.03,0,.35,0,.13,.92,.78,.98,.03,.01,.02,.85,0,.16,.59,.06,.48,.19,.36,0,.01,.91,.11,.13,.03,.81,0,.72,0,.19,0,.83,.02,.57,.58,.02,.15,0,0,0,.69,.73,0,.49,.03,.48,.07,.03,0,0,.92,.96,.95,.02,.04,.98,.07,.7,0,.01,0,.66,.85,0,0,0,0,.01,.55,.46,.03,.26,.28,.62,0,.27,0,.75,0,.01,0,0,.07,0,.08,.15,0,0,.18,.18,.85,.08,.37,.49,.01,0,.94,0,.29,.42,.85,0,.05,.83,0,.8,.52,.63,.62,.26,.11,.97,0,.36,.13,.05,.07,0,.13,.43,.07,.01,.07,1,0,0,.01,.12,0,.02,.91,.02,0,.01,.04,.3,0,.29,.31,.19,0,.07,.82,0,.77,.09,.15,.02,.14,0,.09,0,.47,0,.66,0,.69,0,0,.02,.48,0,.9,.01,.04,.65,.77,0,0,.02,.04,.61,.04,.09,.01,0,.07,.28,0,.03,.02,.01,0,.03,.16,.04,.17,.09,.01,.31,0,.07,.01,0,.65,.1,.03,.04,.11,.02,.25,0,.49,.68,.01,.24,.03,.3,.93,.53,0,.27,.03,0,.01,.72,0,0,.03,0,.16,.01,0,.55,0,.42,0,0,.01,.41,0,.24,.1,.01,.95,0];export{a as pvalData};
