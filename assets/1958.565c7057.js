const a=[0,.42,.02,.11,.13,0,.81,.85,.3,.86,.55,.38,.01,.06,.41,.3,0,.83,0,.07,.26,.43,.48,.35,1,.43,.77,.42,.66,.75,.81,.34,.42,0,.45,.03,.07,.78,.52,.1,.92,.23,.02,.63,.01,.75,.54,.22,.17,.29,.83,0,.13,.02,.4,.53,.15,0,.54,.74,.1,.56,.04,.26,.08,.79,.18,.82,.43,.67,.53,.34,.82,.35,.05,.07,.08,.13,.02,.66,.86,.56,.72,.29,.13,0,.68,.27,.06,.45,.22,.29,.57,.79,.69,0,.58,0,.01,.03,.47,.04,.42,.97,.83,.03,.59,.68,.48,.56,0,.07,.42,.23,.01,.2,.3,.63,.1,.88,.69,.47,.02,.5,.93,.7,.24,.95,.92,.36,.26,.03,.69,.3,0,.06,.85,.31,.62,0,.35,0,.32,.47,0,.32,.15,.57,.45,.14,.05,.89,.95,.07,.52,.57,.11,0,.16,.5,.5,.16,.12,.07,.76,.56,.69,.74,.56,.36,0,.94,.38,.03,.49,.27,.29,.62,.23,.28,.72,.3,.54,.19,.77,0,0,0,.76,.62,.98,.63,0,.06,.3,.38,.47,0,0,.02,.2,.84,.43,.01,.58,.45,.4,.72,.92,0,.25,.45,.74,.5,0,.68,.55,.41,.41,.19,.95,.72,.27,.04,.14,.32,.47,.33,.69,.95,.27,.41,.89,.03,0,0,.91,.71,.29,.56,.79,.41,.11,.31,.51,.15,.58,.5,.26,.54,.35,0,.95,0,.33,.02,.03,.16,.08,.02,.32,.81,.36,.36,.51,.72,.97,.56,.2,0,.76,.02,.31,.06,.62,.04,.67,.29,.18,.21,.88,.06,.05,.02,.24,.44,.27,.25,.09,.01,.07,.11,.75,.08,.66,.02,.51,.01,.06,.83,.73,.26,.12,.21,.09,.03,.01,.22,.8,.4,.37,.78,.01,0,.59,.82,.13,.38,.02,.49,.44,.26,.3,.31,.72,.22,.42,.35,.14,.53,.13,.76,.08,.66,.63,.01,.97,.69,.06,.04,.77,.29,.07,.06,.11,.11,.82,.66,.53,.07,.26,.19,0,.18,.66,.13,.53,.41,.06,.02,.13,.85,.15,.17,.1,.87,0,.27,.11,.78,.53,.61,.96,.56,.07,.8,.01,.27,.7,.08,.9,.47,.77,.88,.16,.36,.5,.52,.91,.98,.07,0,.48,.09,.04,.3,.26,.94,.82,.3,.06,.3,.08,.63,.9,.37,.25,.48,.31,.73,.1,.13,.02,.11,.86,.07,.61,.36,.99,0,0,.87,.82,0,.43,.14,.6,.06,.66,.02,0,.86,.67,0,.34,.01,.33,.67,.15,0,.22,.38,.6,0,.41,.58,.15,.62,.1,.37,.55,.35,.75,.01,.44,.75,.03,.12,0,.19,.01,.58,.32,.05,.31,.07,.53,0,.71,.03,.94,.17,0,0,.87,.87,.24,.65,.24,.06,.03,.19,.23,.86,.2,.34,.87,.08,.19,.01,.68,.35,.2,.38,.01,.44,.94,.71,.81,.09,.42,.36,.17,.07,.15,.64,.25,.76,.62,.21,.16,.9,.34,.01,.18,.08,.01,.72,.17,.15,.95,.11,0,.12,.12,0,.8,0,.69,.78,.55,.85,.38,.69,0,0,.51,.05,.42,.84,.92,.67,0,.43,.28,.1,.01,.37,.02,.77,.31,.29,.08,0,.8,0,.06,.04,.9,.58,.06,.61,.04,.29,.37,.57,.86,.83,.31,.05,.16,.01,.11,.2,.37,.07,.57,0,.79,.16,.53,0,.19,.6,.5,.44,.31,.03,.4,.07,.51,.78,.77,.14,.06,.04,.87,.08,0,.41,.56,.01,.09,.02,.65,.44,.21,.2,.02,.55,.51,.04,0,.38,0,.84,.36,.16,.66,0,.13,.06,.78,.26,.04,.05,.93,.37,.09,.06,0,.15,0,.69,.1,.41,.67,.54,.77,.02,0,.63,.24,.14,.21,.33,.26,.22,.01,.91,0,.42,.16,.13,.68,.53,.17,.03,0,.77,.25,.2,.43,.16,.45,.01,.97,.15,.49,.32,.5,.53,.53,.76,.25,.16,.51,.08,.53,.02,.05,.58,.46,.08,.01,0,.53,.43,.39,.53,.04,.46,.6,0,0,.69,0,.01,.02,.65,.38,.23,.44,.68,.31,.31,.43,0,.02,.89,.58,.01,.07,.42,.01,.57,.18,.35,.18,.77,.91,.12,.04,.33,.91,.17,.01,.09,0,.07,.58,.43,.91,.12,.56,.35,.24,.04,.73,.2,.63,.72,.19,.4,.9,.06,.77,.28,.08,.1,0,.01,.72,.01,.05,.01,.01,.22,.19,.63,.11,.25,.58,.28,.84,.01,.29,0,.14,0,.38,.94,.13,0,.93,.02,.79,.57,.6,.44,.24,0,.16,.4,.03,.24,.46,.21,.29,.02,.1,.01,.2,.58,.41,.58,.14,.39,.17,.32,.04,.01,.31,.05,.01,.36,.96,.83,.21,.58,.64,.7,.72,.3,.5,.04,.04,.04,.89,.47,0,.01,.04,.1,.13,.22,.38,.55,.91,0,.23,.44,.01,.03,.21,.82,.02,.04,0,.23,.13,.48,0,.03,.67,.03,.97,.54,.98,.24,.36,.98,.21,.08,.94,.17,.1,.35,.93,.44,.06,.16,.01,.04,.68,.58,.58,0,.05,.06,.06,.9,.13,.96,.6,.27,.46,.23,.41,0,.7,.14,.03,.2,.74,.12,.15,.02,.3,.1,.5,0,.1,.1,.19,.21,.54,.07,.2,.71,.18,.23,.36,.89,0,.95,0,.16,0,.58,0,.49,.38,.03,.01,.02,.11,.43,.05,.41,.73,.01,.05,.3,.38,.06,0,.04,.54,.59,.7,.03,.99,.36,.48,.27,.78,.44,.01,.26,0,.03,.9,.7,.09,.98,.31,.28,.57,.85,.04,.33,.01,.01,.54,.36,.39,.91,.29,.19,.72,.6,.13,.34,.31,.95,.37,.35,0,.06,.16,.69,.2,.2,.32,.94,.19,.59,.59,.9,.06,.48,.07,.37,.19,0,.11,0,0,.01,.45,.05,.64,.03,.17,.96,.62,.24,.33,.18,.46,.88,.64,.22,.25,.08,0,.09,.46,.14,.28,.01,.67,.06,.56,.7,.69,.58,.55,.13,.18,.12,.44,.66,.04,.05,.23,.43,0,.09,.03,.13,.96,.14,.56,.54,.95,.03,.31,.17,0,.1,.04,.38,.16,.82,.15,.35,.02,.01,.28,.27,.96,.12,.01,.18,.21,.46,.76,.94,.02,0,.29,.73,.21,.27,.95,.23,.33,.69,.96,0,0,.3,.32,.2,.06,.07,0,.05,0,.01,.87,.32,.02,.26,.14,.01,.12,.81,.79,.03,.05,.01,0,.11,.03,.03,.37,.89,.78,.84,.25,.24,.73,.21,.79,.95,.58,.79,0,.72,.95,.34,.05,.08,.06,.86,.36,.76,.33,.24,0,0,.36,.05,.09,.34,.25,.65,.47,.25,.07,.01,.24,.16,.6,.41,0,.46,.61,.15,.31,.44,.16,0,.86,.47,.03,.08,.01,.75,0,.15,.15,.57,0,.72,0,0,.98,.23,0,.86,.4,.3,.1,.02,.06,.75,.52,0,.15,.21,.25,.52,.41,.22,.26,.57,.02,.02,.79,.7,.52,0,.22,.55,.64,.02,.5,.04,.03,.01,.34,.04,.08,.05,.27,.83,.44,0,0,.07,.25,.24,.66,.01,.01,.4,.11,0,.01,.52,.78,.7,0,.45,.02,.77,.6,.17,.54,0,0,.05,.01,.11,.14,.09,.84,.78,.18,.31,.06,.39,.92,.76,.01,0,.41,.35,.05,.53,0,.48,0,.31,.91,0,.39,.83,0,.11,.02,.03,.69,.01,.25,.11,.17,.26,.12,.03,0,.01,.19,.25,.26,0,.11,.83,.11,.18,.09,.1,.67,.04,.08,.64,.41,0,.24,.32,.7,0,.33,.06,.03,0,.89,.09,.31,.01,.4,.1,.01,.07,.71,.12,.85,.2,.04,.45,.92,.52,.01,.2,.23,.93,.41,.44,0,.49,0,.96,.33,.52,.47,0,.46,.04,0,.25,.75,0,.01,.19,.01,.11,.64,.18,.3,.31,.57,.31,.11,.19,.81,.14,.3,0,.1,.2,.89,.07,.25,.17,0,.23,.33,.88,.06,.92,0,.99,.15,.8,.84,.38,.09,.11,0,.02,.11,.07,.04,.47,.31,.08,.02,.43,.05,.07,0,.01,.01,.02,.39,0,.43,0,.01,.72,.2,.85,0,.75,.13,.17,.03,.69,.33,.44,.2,.94,.21,0,.3,.44,.19,.49,0,.01,.66,.44,.17,.8,.31,.67,.73,.18,0,.04,.68,.34,.63,.54,.21,.34,.87,.06,.5,.36,.37,.11,.87,.43,.33,.86,.3,.76,.19,.35,.23,.44,.71,0,.42,.01,.28,.12,.01,.22,0,.24,.26,.48,.97,.86,.02,.01,.54,.97,.08,.43,.94,.15,.51,.02,.07,.69,.66,.09,.33,.13,.16,.69,.19,.52,.45,.62,.02,.98,.03,.74,.26,.73,.69,.45,.12,.31,.04,.32,.16,.81,.68,.2,.58,.01,.05,.12,.61,.4,.79,.8,.1,.01,.29,.11,.6,.44,.21,.38,.46,.54,.06,.11,.2,.09,.48,.52,.18,.5,.13,.01,.3,.62,.84,.81,.44,.26,.47,.01,.92,.6,.94,0,.15,.92,.67,.58,.25,.04,.04,.25,.33,.91,.29,.32,.98,.59,.05,.36,.66,.25,.34,0,.91,.09,.47,.06,.66,.02,0,.39,.97,.01,.8,.46,.69,.14,.15,.28,.2,.77,.01,.36,.42,.67,.54,.07,.72,.7,0,.59,.56,.42,.48,.63,.11,.62,.28,.39,.54,.99,.29,.24,.13,.7,.09,.38,.33,.31,.92,.08,.1,.65,0,.64,.01,.37,.3,.75,.07,.01,.01,.75,.05,.97,.89,.19,.22,.93,.9,.11,.21,.82,.97,.51,0,.21,.45,.1,.27,.81,.04,.02,.02,.57,.02,.1,.28,.02,.81,.02,.79,.06,.6,.8,.54,.35,.84,0,.45,.42,.95,.62,.18,.34,.27,.51,.11,.01,.85,.36,.29,.75,.45,.53,.88,.14,.26,.63,.75,.56,.01,.54,.31,.84,.74,.28,.23,.02,1,.26,.02,.05,0,.18,.86,.37,.11,.99,.77,.06,.04,.14,.4,.03,.6,.04,.98,.69,.69,.49,.35,.51,.83,.91,.31,.69,.68,.3,.4,.54,.82,.99,.52,.58,.91,.73,.91,.93,.28,.23,0,.1,.42,.21,.05,.76,.78,.32,.26,.18,.72,.01,0,.09,.87,.39,.19,.03,.23,.66,.02,.93,.45,.95,0,0,.5,.02,.07,.68,.06,.16,.73,.81,.1,.04,.84,.18,.93,.89,.09,.41,0,.69,.33,.16,.22,.53,.99,.05,.66,.2,.38,.12,.07,.45,.13,.79,.05,.01,.78,.53,.62,.6,.14,.15,.13,.57,.48,.66,.52,1,.65,0,.39,.57,.85,.09,.78,.92,.03,.02,.53,.01,.3,.22,.94,.88,.26,.29,.31,0,.47,.21,.1,.02,.1,.2,.13,.83,.18,.17,.89,.16,.73,.6,.01,.45,.17,.17,.15,.39,.04,.53,.18,.68,.64,.42,.63,0,0,.62,.34,.2,.38,.6,.1,.71,.16,.44,.32,.06,.32,.77,.4,.16,.64,.74,.66,.33,.12,.03,.06,.11,.55,.33,0,.8,.33,.06,.81,.07,.04,.91,.25,.65,.19,.11,.29,.94,.82,.76,.8,.39,0,.18,0,.69,.07,.21,.24,.29,.23,.86,.46,.95,.67,0,.18,.41,.25,.11,.03,.15,.28,.78,.1,.01,.05,.15,.97,.06,.57,.16,.94,.79,.09,.12,.04,.6,.01,.12,.05,.41,.03,.81,.21,.12,.36,0,.57,.03,0,.94,.31,.42,.44,.1,.76,.06,0,.08,.23,.72,.06,.1,.03,.69,0,.08,.41,.7,.6,0,.16,.66,.54,.1,.33,0,.4,0,.03,.26,.01,.19,.29,.17,.05,.14,.23,0,.02,.71,0,.15,.52,.17,.03,.53,.03,.84,.02,.03,.91,.4,.4,.01,.7,.11,.58,.6,.13,.55,.97,.24,0,.01,.61,.3,.16,.01,.59,.07,.18,.2,.1,0,.05,.01,.25,.32,.16,.74,.05,.42,.27,.18,.2,.01,.93,.25,.04,.4,.19,.33,.31,.12,.46,.17,0,.1,.15,.02,.53,.5,0,.18,.02,.62,.13,.54,.17,.02,.7,.15,.95,.79,.01,.72,.46,.08,.15,.12,.49,.22,.13,0,0,.68,.58,.22,.43,0,.05,.39];export{a as pvalData};
